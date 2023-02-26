/* The below code is an Angular module definition for the application. It imports various Angular modules, third-party modules, and components, and defines the application components and their dependencies.
The NgModule decorator is used to define the module and its metadata. The metadata includes the declarations, imports, exports, providers, and bootstrap properties.
The declarations property lists all the components, directives, and pipes that belong to this module. The imports property imports all the necessary modules needed in the module. The providers property is used to register service providers.
Some of the modules and components that are imported in this code include:
    AppRoutingModule: A module that defines the application routes
    FormsModule and ReactiveFormsModule: Modules used to work with forms
    HttpClientModule: Module used to make HTTP requests
    MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatListModule, MatToolbarModule: Material Design modules containing UI components
    StoreModule: A module used to set up the NgRx store for the application.
The code defines the following components:
    AppComponent: The root component of the application that contains the main navigation and outlet for rendering other components
    ToDoListComponent: A component that displays a list of To Do items
    NavigationComponent: A component that contains the navigation bar for the application
    SignupComponent: A component that contains the UI for user registration
    LoginComponent: A component that contains the UI for user login
    HomeComponent: A component that displays the home page of the application
Overall, the code is used to configure the modules and components that are needed in the application and to set up the Angular Material design system for use in the UI components. The StoreModule is used to set up the NgRx store for the application, which is used for state management.
 25/02/2023 Indika Sirimanna*/
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { StoreModule } from '@ngrx/store';
import { simpleReducer } from './simple.reducer';

import { NavigationComponent } from './components/navigation/navigation.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    NavigationComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ message: simpleReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
