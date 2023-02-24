

import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import{ MatButtonModule } from '@angular/material/button';
import{ MatCardModule } from '@angular/material/card';
import{ MatIconModule } from '@angular/material/icon';
import{ MatInputModule } from '@angular/material/input';
import{ MatListModule } from '@angular/material/list';
import{ MatToolbarModule } from '@angular/material/toolbar';
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
    HomeComponent
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
    StoreModule.forRoot({ message: simpleReducer })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
