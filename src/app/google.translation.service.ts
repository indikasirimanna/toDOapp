/* This code defines a service named GoogleTranslationService that can be injected into other Angular components, and it contains a single method named translate().
The translate() method takes a parameter model of type any, which is an object that represents the translation request to be sent to the Google Cloud Translation API. The model object includes a q property that represents an array of text strings to be translated, and a target property that specifies the target language code for the translation.
The service uses the Angular HttpClient to send an HTTP POST request to the Google Cloud Translation API with the model object as the request body. The API key for the Translation API is included in the URL of the API endpoint.
Overall, this code is a simple implementation of a service for translating text using the Google Cloud Translation API. 
25/02/2023 Indika Sirimanna*/
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GoogleTranslationService {
  constructor(private http: HttpClient) {}

  translate(model: any) {
    return this.http.post(
      'https://translation.googleapis.com/language/translate/v2?key=AIzaSyAcImAFq5ux9s-qDip3X4j5yEwLUISwn8w',
      model
    );
  }
}
