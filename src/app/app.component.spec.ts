/* This is a test file written in TypeScript for an Angular component called AppComponent. The purpose of this test file is to ensure that the component behaves correctly and meets the requirements defined in the test cases.
The beforeEach function is executed before each test case, and it sets up the test bed with the AppComponent as a declaration.
The first test case checks if the component is created successfully, and expects the app instance to be truthy.
The second test case checks if the component has the correct title, which is 'toDoList-operations'. It expects the title property of the app instance to be equal to this string.
The third test case checks if the title is rendered correctly in the component's template. It gets a reference to the component's DOM element using fixture.nativeElement, and expects the text content of the element with the CSS class .content span to contain the string 'toDoList-operations app is running!'.
These tests help to ensure that the AppComponent behaves correctly and meets the specified requirements. 
25/02/2023 Indika Sirimanna*/

import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'toDoList-operations'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('toDoList-operations');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'toDoList-operations app is running!'
    );
  });
});
