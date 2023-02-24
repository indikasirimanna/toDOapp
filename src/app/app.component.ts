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

  spanishMessage() {
    this.store.dispatch({ type: 'SPANISH' });
  }
  frenchMessage() {
    this.store.dispatch({ type: 'FRENCH' });
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
