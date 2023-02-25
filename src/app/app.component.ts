/* This is the root component of an Angular application. It has the following features:
    It imports HttpClient from the @angular/common/http package, environment and GoogleTranslationService from local files, Store and Observable from rxjs.
    It defines an interface Appstate which is used for the state management in the component.
    It has a class AppComponent which contains various properties and methods.
    The constructor method initializes the properties of the class.
    The message$ property is an Observable which is used to store and retrieve a message from the state store using Store from @ngrx/store.
    The SinhalaMessage() method dispatches a message to the state store using store.dispatch().
    The translate() method uses the googleTranslationService to translate the inputText to the targetLanguage and stores the translated text in the transalatedText property. The translation is obtained by calling the translate() method of the GoogleTranslationService.
    The AppComponent is declared as a component using the @Component decorator. The selector property specifies the name of the selector that is used to reference this component in other parts of the application. The templateUrl property specifies the HTML template that is used to render the component. The styleUrls property specifies the CSS styles that are applied to the component.
 25/02/2023 Indika Sirimanna*/
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { GoogleTranslationService } from './google.translation.service';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

interface Appstate {
  message: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  message$: Observable<string>;

  title = 'toDoList-operations';
  targetLanguage: string = '';
  inputText: string = '';
  transalatedText = '';
  constructor(
    private googleTranslationService: GoogleTranslationService,
    private store: Store<Appstate>
  ) {
    this.message$ = this.store.select('message');
  }

  SinhalaMessage() {
    this.store.dispatch({ type: 'SINHALA' });
  }

  translate() {
    let model = {
      q: [this.inputText],
      target: this.targetLanguage,
    };
    this.googleTranslationService
      .translate(model)
      .subscribe((response: any) => {
        this.transalatedText = response.data.translations[0].translatedText;
      });
  }
}
