/*The import statements at the beginning of the code are importing necessary Angular modules, services and interfaces.
  Below code is an Angular component that manages a to-do list using the ToDoListCrudService service to communicate with a backend API, and the GoogleTranslationService to translate text.
  The component has several properties and methods that are used to manage the state of the to-do list, handle user input, and perform translations. Some notable properties and methods are:
    todolistVariable$: an Observable that holds an array of ToDoList items retrieved from the backend API.
    fetchAll(): a method that fetches all to-do list items from the backend API and returns an Observable.
    post(), update(), delete(): methods that use the ToDoListCrudService to create, update, or delete to-do list items in the backend API, and update the todolistVariable$ Observable.
    translate(): a method that uses the GoogleTranslationService to translate text to a target language and updates the transalatedText property.
    addTodo(): a method that logs a title parameter to the console, but is not currently used in the component.
  The component also has a ngOnInit() method that sets the todolistVariable$ property to the result of fetchAll().
  Overall, this component provides the functionality to manage a to-do list and perform translations using the provided services, but it's difficult to fully understand its purpose without additional context about the application it's used in.
  26/02/2023 Indika Sirimanna*/
import { Component } from '@angular/core';
import { filter, Observable, tap } from 'rxjs';
import { ToDoList } from 'src/app/models/ToDoList';
import { ToDoListCrudService } from 'src/app/services/to-do-list-crud.service';
import { GoogleTranslationService } from './google.translation.service';
import { Store } from '@ngrx/store';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


interface Appstate {
  message: string;
}

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],


})


export class ToDoListComponent {
  message$: Observable<string>;

  result = localStorage.getItem('userName');
  userNamex = this.result.substring(0, this.result.indexOf("@"));
  spacex = ' - ';
  clickTranslate = ' Click Translate ';

  targetLanguage: string = '';
  inputText: string = '';
  transalatedText = '';

  todolistVariable$: Observable<ToDoList[]> | undefined;

  constructor(
    private ToDOlistcurdservice: ToDoListCrudService,
    private googleTranslationService: GoogleTranslationService,
    private store: Store<Appstate>
  ) {
    this.message$ = this.store.select('message');
  }
  SinhalaMessage() {
    this.store.dispatch({ type: 'SINHALA' });
  }

  translate(value?: string) {
    let model = {
      q: value,
      target: 'si',
    };
    this.googleTranslationService
      .translate(model)
      .subscribe((response: any) => {
        this.transalatedText = response.data.translations[0].translatedText;
      });
  }

  ngOnInit(): void {
    this.todolistVariable$ = this.fetchAll();

  }

  fetchAll() {
    //this.inputText = "hello";

    return this.ToDOlistcurdservice.fetchAll();
  }

  post(todolistItem: Partial<ToDoList>): void {
    // console.log(todolistItem);
    const item = (<string>(<unknown>todolistItem)).trim();
    if (!item) return;
    this.todolistVariable$ = this.ToDOlistcurdservice.post({ item }).pipe(
      tap((_) => (this.todolistVariable$ = this.fetchAll()))
    );
  }

  update(id: number, newItem: Partial<ToDoList>): void {
    const item = (<string>(<unknown>newItem)).trim();
    if (!item) return;

    const newToDoList: ToDoList = {
      id,
      item,
    };
    this.todolistVariable$ = this.ToDOlistcurdservice.update(newToDoList).pipe(
      tap((_) => (this.todolistVariable$ = this.fetchAll()))
    );
  }

  deletex(id: number): void {
    this.todolistVariable$ = this.ToDOlistcurdservice.delete(id).pipe(
      tap((_) => (this.todolistVariable$ = this.fetchAll()))
    );
  }

  addTodo(title: string) {
    console.log(title);
  }


}
