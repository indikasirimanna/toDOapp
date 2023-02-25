/* This code is an Angular unit test for the ErrorHandlerService class.
The test uses the TestBed utility provided by Angular to set up a testing module, and then injects an instance of the ErrorHandlerService class into the test by calling TestBed.inject(ErrorHandlerService) and assigning the result to the service variable.
The test then checks that the service variable is truthy, indicating that the ErrorHandlerService was successfully injected.
Overall, this is a simple test to ensure that the ErrorHandlerService can be successfully instantiated in a testing environment.
25/02/2023 Indika Sirimanna */
import { TestBed } from '@angular/core/testing';

import { ErrorHandlerService } from './error-handler.service';

describe('ErrorHandlerService', () => {
  let service: ErrorHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
