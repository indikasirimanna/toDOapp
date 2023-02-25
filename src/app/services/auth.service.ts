/*  This is an Angular service named AuthService which is responsible for managing user authentication. Here's the analysis of this code:
    The service has dependencies on HttpClient, ErrorHandlerService, and Router services, which are injected via the constructor using Dependency Injection.
    It defines a private URL property to hold the base URL of the authentication API endpoint.
    It has an isUserLoggedIn$ property of type BehaviorSubject<boolean> which is used to keep track of the user login status. This property is initially set to false.
    It also has a userId property of type Pick<User, 'id'> to store the ID of the logged-in user.
    It defines an httpOptions property to set the Content-Type header for HTTP requests.
    The signup method is used to create a new user account by sending a POST request to the /signup endpoint with the user data. It returns an observable of User type.
    The login method is used to authenticate the user by sending a POST request to the /login endpoint with the user's email and password. It returns an observable that emits an object with a token and a userId. It also sets the isUserLoggedIn$ property to true, saves the userId to the userId property and stores the token in the local storage. Additionally, it redirects the user to either the signup or posts page based on the user's email.
    The foo method is used for testing purposes only and logs the id property of the userId object to the console.
    The service uses catchError operator from RxJS to handle errors that might occur during the HTTP requests, which are handled by the errorHandlerService.
    Finally, the service is decorated with the @Injectable decorator, which tells Angular that this service can be injected as a dependency in other components or services. It is provided at the root level, which means it's a singleton service that is shared across the entire application.
     25/02/2023 Indika Sirimanna*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable, BehaviorSubject } from 'rxjs';
import { first, catchError, tap } from 'rxjs/operators';

import { User } from '../models/User';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = 'http://epayslip.slpa.lk:3306/auth';

  isUserLoggedIn$ = new BehaviorSubject<boolean>(false);
  userId: Pick<User, 'id'>;

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService,
    private router: Router
  ) {}

  signup(user: Omit<User, 'id'>): Observable<User> {
    return this.http
      .post<User>(`${this.url}/signup`, user, this.httpOptions)
      .pipe(
        first(),
        catchError(this.errorHandlerService.handleError<User>('signup'))
      );
  }

  login(
    email: Pick<User, 'email'>,
    password: Pick<User, 'password'>
  ): Observable<{
    token: string;
    userId: Pick<User, 'id'>;
  }> {
    return this.http
      .post(`${this.url}/login`, { email, password }, this.httpOptions)
      .pipe(
        first(),
        tap((tokenObject: { token: string; userId: Pick<User, 'id'> }) => {
          this.userId = tokenObject.userId;
          localStorage.setItem('token', tokenObject.token);
          this.isUserLoggedIn$.next(true);
          if (email.email == 'admin@admin.com') {
            this.router.navigate(['signup']);
          } else {
            this.router.navigate(['posts']);
          }
        }),
        catchError(
          this.errorHandlerService.handleError<{
            token: string;
            userId: Pick<User, 'id'>;
          }>('login')
        )
      );
  }
  foo(value: string) {
    console.log(this.userId.id);
  }
}
