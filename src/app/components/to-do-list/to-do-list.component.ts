/*  The import statements at the beginning of the code are importing necessary Angular modules, services and interfaces.
    The class is declared with the @Component decorator, which contains metadata for the component, including the selector, template URL and style URL.
    The class implements the ngOnInit() method that initializes the component after it is created.
    The class has multiple methods that perform various actions on the to-do list, such as fetching, adding, updating and deleting items.
    The class also has a translate() method that calls a Google Translation service to translate a given text to a target language.
    The class has an observable message$ variable that is subscribed to the store to get a message for the user interface.
    The class has a constructor that initializes various services that are used in the component.
    The class also has a SinhalaMessage() method that dispatches an action to the store to change the message to Sinhala language.
    Overall, the component manages the to-do list feature and provides methods for CRUD (Create, Read, Update, Delete) operations on the list. It also provides a translation functionality using a Google Translation service. 
    25/02/2023 Indika Sirimanna*/
import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ToDoList } from 'src/app/models/ToDoList';
import { ToDoListCrudService } from 'src/app/services/to-do-list-crud.service';

import { GoogleTranslationService } from './google.translation.service';

import { Store } from '@ngrx/store';

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

  userNamex = localStorage.getItem('userName');
  spacex = ' - ';

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

    return this.ToDOlistcurdservice.fetchAll(this.userNamex);
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
