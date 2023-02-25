/* This code defines an AuthInterceptorService class that implements the HttpInterceptor interface in Angular.
The HttpInterceptor interface allows intercept HTTP requests and responses, and optionally modify them.
In this particular implementation, the intercept() method intercepts each outgoing HTTP request and adds an Authorization header to it with a bearer token retrieved from local storage, if the token is present.
If the token is not present, it simply passes the request along to the next interceptor in the chain by calling next.handle(req).
The AuthInterceptorService is provided at the root level using the @Injectable decorator with providedIn: 'root', which makes it available globally in the application.
This service is typically used in conjunction with an authentication service to ensure that only authenticated users can access protected API endpoints.
 25/02/2023 Indika Sirimanna*/
import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from "@angular/common/http";

import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthInterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem("token");
    if (token) {
      const clonedRequest = req.clone({
        headers: req.headers.set("Authorization", "Bearer " + token),
      });
      return next.handle(clonedRequest);
    } else {
      return next.handle(req);
    }
  }
}
