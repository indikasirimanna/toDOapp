/* This code imports the Component, OnInit, FormControl, FormGroup, Validators, Router and AuthService modules from Angular and the application's own auth.service module. */
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from "src/app/services/auth.service";
/* This code defines the SignupComponent with a selector of app-signup, and it provides the component's template and styles through the templateUrl and styleUrls properties.
 Defining the SignupComponent class: */
@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})

/* This code defines the SignupComponent class that implements the OnInit interface. It also defines a signupForm property, which is of type FormGroup and will hold the form data. The constructor() method initializes the AuthService and Router dependencies that the component will use. The ngOnInit() method initializes the signupForm property by calling the createFormGroup() method. */
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.signupForm = this.createFormGroup();
  }
/* This code defines a createFormGroup() method that returns a FormGroup object. The FormGroup contains three FormControl objects: name, email, and password. Each FormControl object has a default value of an empty string and an array of validation rules that it must pass before being considered valid.
  Handling form submission: */
  createFormGroup(): FormGroup {
    return new FormGroup({
      name: new FormControl("", [Validators.required, Validators.minLength(2)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(7),
      ]),
    });
  }
/* This code defines a signup() method that is called when the user submits the sign-up form. It calls the signup() method of the AuthService with the signupForm.value object as an argument. The AuthService sends an HTTP POST request to the server with the user's sign-up data. If the sign-up is successful, the server sends a response message, which is logged to the console, and the user is redirected to the login page using the Router.
Overall, the code is well-structured and follows Angular best practices. It effectively handles user input validation and sends the sign-up data to the server for processing.*/
  signup(): void {
    this.authService.signup(this.signupForm.value).subscribe((msg) => {
      console.log(msg);
      this.router.navigate(["login"]);
    });
  }
}
