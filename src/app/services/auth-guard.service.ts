/* This code defines an AuthGuard service in an Angular application that implements the CanActivate interface. The purpose of this service is to prevent unauthorized access to certain routes by checking if the user is logged in or not.
The AuthGuard service is injected with AuthService and Router dependencies through the constructor. The AuthService is a custom service that provides the current user login state using a BehaviorSubject<boolean> called isUserLoggedIn$. The Router is a built-in Angular service that allows the application to navigate to different routes programmatically.
The canActivate() method is called by the Angular router to check if the user is authorized to access a particular route. If the isUserLoggedIn$ value is false, meaning the user is not logged in, the method redirects the user to the signup route using the Router.navigate() method. If the isUserLoggedIn$ value is true, the method returns an Observable<boolean> of true which allows the user to access the requested route.
In summary, this code provides a guard to protect certain routes in an Angular application by ensuring that only logged-in users can access them. 
25/02/2023 Indika Sirimanna*/
import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    if (!this.authService.isUserLoggedIn$.value) {
      this.router.navigate(["signup"]);
    }
    return this.authService.isUserLoggedIn$;
  }
}
