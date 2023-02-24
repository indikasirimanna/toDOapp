import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { catchError, tap } from 'rxjs/operators';

import { ToDoList } from '../models/ToDoList';
import { ErrorHandlerService } from './error-handler.service';




@Injectable({
  providedIn: 'root'
})
export class ToDoListCrudService {

  private url ="http://epayslip.slpa.lk:3306/toDoList";

  httpOptions : {headers: HttpHeaders} = {
    headers : new HttpHeaders({"Content-Type": "application/json"
   }),
    
  }

  constructor(private errorHandkerService:ErrorHandlerService, private http: HttpClient) { }
  //userNamex = localStorage.getItem('userName'); 
  fetchAll(userNamex): Observable<ToDoList[]>{
    return this.http
    .get<ToDoList[]>(this.url,{responseType : "json"})
    .pipe(
      tap((_) => console.log('Fetched ToDoList')),
      catchError(
        this.errorHandkerService.handleError<ToDoList[]>("fetchAll()",[])
      )
    );
  }

 postTraslate(item : Partial<ToDoList>): Observable<any>{
  return this.http.post<Partial<ToDoList>>(this.url, item, this.httpOptions).pipe(
    catchError(
      this.errorHandkerService.handleError<any>("post")
    )
  );
}

post(item : Partial<ToDoList>): Observable<any>{
  return this.http.post<Partial<ToDoList>>(this.url, item, this.httpOptions).pipe(
    catchError(
      this.errorHandkerService.handleError<any>("post")
    )
  );
}


update(todolist : ToDoList): Observable<any>{
  return this.http.put<ToDoList>(this.url, todolist, this.httpOptions).pipe(
    catchError(
      this.errorHandkerService.handleError<any>("update")
    )
  );
}


delete(id : number): Observable<any>{

  const url ='http://epayslip.slpa.lk:3306/toDoList/'+(id);

  return this.http.delete<ToDoList>(url, this.httpOptions).pipe(
    catchError(
      this.errorHandkerService.handleError<any>("delete")
    )
  );

}


}
