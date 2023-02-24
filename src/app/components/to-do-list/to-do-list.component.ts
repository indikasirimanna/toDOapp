import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ToDoList } from 'src/app/models/ToDoList';
import { ToDoListCrudService } from 'src/app/services/to-do-list-crud.service';

import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { GoogleTranslationService } from './google.translation.service';

import { Store } from '@ngrx/store';

import { LoginComponent } from '../login/login.component';

import { AuthService } from "src/app/services/auth.service";

interface Appstate{
  message : string;

}

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})


export class ToDoListComponent {
  message$ : Observable<string>;

  userNamex = localStorage.getItem('userName'); 


 

  targetLanguage:string='';
  inputText:string='';
  transalatedText='';


  todolistVariable$ : Observable<ToDoList[]> | undefined


  constructor(private ToDOlistcurdservice: ToDoListCrudService , private googleTranslationService: GoogleTranslationService ,private store: Store<Appstate>) {
    this.message$ = this.store.select('message')
  

  }
  SinhalaMessage(){
    this.store.dispatch({type : 'SINHALA'})
  }
  frenchMessage(){
    this.store.dispatch({type : 'FRENCH'})
  }

  translate(value?:string){
    
    let model={
      "q": value,
      "target": "si"
    };
     this.googleTranslationService.translate(model).subscribe((response:any)=>{
      this.transalatedText=response.data.translations[0].translatedText
    })
  }

    ngOnInit (): void{
      this.todolistVariable$ = this.fetchAll();
      
    }

    fetchAll(): Observable<ToDoList[]>{
      //this.inputText = "hello";
      return this.ToDOlistcurdservice.fetchAll();
    }

    
    post(todolistItem: Partial<ToDoList>): void {
     // console.log(todolistItem);
      const item = (<string><unknown>todolistItem).trim();
      if(!item) return;      
      this.todolistVariable$ = this.ToDOlistcurdservice.post({ item }).pipe(
        tap((_) => this.todolistVariable$ = this.fetchAll() )
      );
    }
    update(id: number, newItem :Partial<ToDoList>): void{

      const item = (<string><unknown>newItem).trim();
      if(!item) return;

      const newToDoList: ToDoList = {
        id,
        item
      }
      this.todolistVariable$ = this.ToDOlistcurdservice.update(newToDoList).pipe(
        tap((_) => this.todolistVariable$ = this.fetchAll() )
      );

    }

    deletex(id: number): void{
      this.todolistVariable$ = this.ToDOlistcurdservice.delete(id).pipe(
        tap((_) => this.todolistVariable$ = this.fetchAll() )
      );
    }

    addTodo(title:string) {
      console.log(title);
    }



}
