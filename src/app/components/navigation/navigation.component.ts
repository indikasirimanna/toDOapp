/* This code defines an Angular component called NavigationComponent, which provides a navigation menu and logout functionality for authenticated users.
The component depends on the AuthService and Router services, which are injected via the constructor. The AuthService provides a boolean Observable called isUserLoggedIn$, which emits true when the user is authenticated and false when the user is logged out. In the ngOnInit method, the component subscribes to this Observable and sets the isAuthenticated property accordingly.
The component also defines a logout method that removes the token from the local storage, sets the isUserLoggedIn$ Observable to false, and navigates the user to the login page.
Overall, this component provides a simple way to display a navigation menu and handle user authentication in an Angular application.
25/02/2023 Indika Sirimanna*/
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit{

  isAuthenticated = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.isUserLoggedIn$.subscribe((isLoggedIn) => {
      this.isAuthenticated = isLoggedIn;
    });
  }

  logout(): void {
    localStorage.removeItem("token");
    this.authService.isUserLoggedIn$.next(false);
    this.router.navigate(["login"]);
  }
}

