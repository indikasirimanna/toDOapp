/* This code is creating a component in an Angular application. It references the component's selector, template, and stylesheet. 
The component is then exported so that it can be used in other parts of the application. 
25/02/2023 Indika Sirimanna */
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
