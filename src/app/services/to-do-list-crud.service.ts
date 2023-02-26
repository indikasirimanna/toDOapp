/*This is an Angular service called ToDoListCrudService that interacts with a remote server to perform CRUD (Create, Read, Update, Delete) operations on a resource called ToDoList. Here are some comments on the code:
  The service imports HttpClient, HttpHeaders, Injectable, Observable, catchError, tap, ToDoList, and ErrorHandlerService from Angular modules and defines an interface for httpOptions as an object containing headers with the "Content-Type" key and "application/json" value.
  The ToDoListCrudService constructor takes two arguments, ErrorHandlerService and HttpClient, and stores them as private properties for use later.
  The service defines four methods for CRUD operations: fetchAll, postTraslate, post, update, and delete. All of them use HttpClient to send HTTP requests to the remote server, and they handle any errors using the handleError method from the ErrorHandlerService injected into the constructor.
  The fetchAll method sends an HTTP GET request to fetch all the ToDoList resources from the server for a particular userName. It returns an observable of an array of ToDoList objects, and it also logs a message to the console when the operation is successful.
  The postTraslate, post, and update methods send HTTP POST and PUT requests to create or update a ToDoList resource on the server, respectively. They return an observable of the updated or created ToDoList object.
  The delete method sends an HTTP DELETE request to delete a ToDoList resource from the server by its id. It returns an observable of the deleted ToDoList object.
  Overall, this service provides a convenient interface to interact with the remote server to perform CRUD operations on ToDoList resources.
  25/02/2023 Indika Sirimanna*/
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { catchError, tap } from 'rxjs/operators';

import { ToDoList } from '../models/ToDoList';
import { ErrorHandlerService } from './error-handler.service';
import fetch from 'node-fetch';




@Injectable({
  providedIn: 'root'
})
export class ToDoListCrudService {

  private url = "http://epayslip.slpa.lk:3306/toDoList";

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    }),

  }

  constructor(private errorHandkerService: ErrorHandlerService, private http: HttpClient) { }
  //userNamex = localStorage.getItem('userName'); 
  fetchAll(): Observable<ToDoList[]> {
    return this.http
      .get<ToDoList[]>(this.url, { responseType: "json" })
      .pipe(
        tap((_) => console.log('Fetched ToDoList')),
        catchError(
          this.errorHandkerService.handleError<ToDoList[]>("fetchAll()", [])
        )
      );
  }

  postTraslate(item: Partial<ToDoList>): Observable<any> {
    return this.http.post<Partial<ToDoList>>(this.url, item, this.httpOptions).pipe(
      catchError(
        this.errorHandkerService.handleError<any>("post")
      )
    );
  }

  post(item: Partial<ToDoList>): Observable<any> {
    return this.http.post<Partial<ToDoList>>(this.url, item, this.httpOptions).pipe(
      catchError(
        this.errorHandkerService.handleError<any>("post")
      )
    );
  }


  update(todolist: ToDoList): Observable<any> {
    return this.http.put<ToDoList>(this.url, todolist, this.httpOptions).pipe(
      catchError(
        this.errorHandkerService.handleError<any>("update")
      )
    );
  }


  delete(id: number): Observable<any> {

    const url = 'http://epayslip.slpa.lk:3306/toDoList/' + (id);

    return this.http.delete<ToDoList>(url, this.httpOptions).pipe(
      catchError(
        this.errorHandkerService.handleError<any>("delete")
      )
    );



  }


}
