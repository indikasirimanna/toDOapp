/* 
This is a LoginComponent class from Angular that uses the AuthService to login a user given an email and password. 
The form for the login is created using FormGroup and FormControl, and the login method is called when the form is submitted. 
    The component imports Component, OnInit, FormControl, FormGroup, and Validators from @angular/core and @angular/forms.
    It also imports AuthService from a custom service.
    The component is decorated with @Component, which specifies the selector, HTML template, and CSS file for the component.
    The loginForm property is declared with the FormGroup type and initialized with createFormGroup(), which returns a new FormGroup instance with two FormControl instances, one for email and one for password.
    The createFormGroup() method defines the validation rules for the form fields using Validators.required, Validators.email, and Validators.minLength(7) validators.
    The login() method calls the login() method of the AuthService service, passing the email and password values from the form. The method also saves the email value to the localStorage.
    The loginx() method is not used in the component and can be removed.
Overall, this component defines a login form with validation rules for the email and password fields. When the user submits the form, the login() method calls the AuthService to attempt to authenticate the user and saves the email to the localStorage. 
25/02/2023 Indika Sirimanna*/
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'src/app/services/auth.service';

import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.loginForm = this.createFormGroup();
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(7),
      ]),
    });
  }

  login(): void {
    this.authService
      .login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe();
    localStorage.setItem('userName', this.loginForm.value.email);
  }

  loginx() {
    return 'test';
  }
}
