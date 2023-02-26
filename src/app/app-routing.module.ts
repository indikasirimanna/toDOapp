/* This code defines the routing configuration for an Angular application using the RouterModule.
The AuthGuard is imported from ./services/auth-guard.service and applied to the "posts" route. This means that only authenticated users can access this route.
The Routes array contains the routing information for different paths. Here, there are four routes defined:
    The default path is mapped to the HomeComponent.
    The "posts" path is mapped to the ToDoListComponent, with the AuthGuard applied.
    The "login" path is mapped to the LoginComponent.
    The "signup" path is mapped to the SignupComponent.
    The "admin" path is mapped to the AdminComponent.
The ** route is a wildcard route that redirects to the default path if the requested route is not found.
Finally, the AppRoutingModule module is defined to import the RouterModule and export it for use in the main AppModule. 
25/02/2023 Indika Sirimanna*/
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from "./services/auth-guard.service";

import { HomeComponent } from "./components/home/home.component";
import { ToDoListComponent } from "./components/to-do-list/to-do-list.component";
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "posts", component: ToDoListComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
