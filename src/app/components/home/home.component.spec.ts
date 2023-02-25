/* This is a test code written using the Jasmine testing framework for the HomeComponent in Angular. 
The code imports the TestBed, HomeComponent and ComponentFixture from the @angular/core/testing library. 
The code then uses TestBed.configureTestingModule to configure the HomeComponent, and creates the component using TestBed.createComponent. 
Finally, the code uses the expect() method to check if the component is truthy. 
25/02/2023 Indika Sirimanna */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
