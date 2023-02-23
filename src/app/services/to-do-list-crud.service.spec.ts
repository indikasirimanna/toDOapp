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
