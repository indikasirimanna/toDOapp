/* his code is a test file for ToDoListCrudService class which is used to perform CRUD operations on a to-do list.
In the beforeEach function, TestBed.configureTestingModule is used to configure and create a module environment for testing. Then, TestBed.inject is used to get an instance of ToDoListCrudService.
The it block checks if the service variable is truthy, meaning that an instance of the ToDoListCrudService has been successfully created, indicating that the service can be used for further testing.
 25/02/2023 Indika Sirimanna*/
import { TestBed } from '@angular/core/testing';

import { ToDoListCrudService } from './to-do-list-crud.service';

describe('ToDoListCrudService', () => {
  let service: ToDoListCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToDoListCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
