/* This is a test file for the GoogleTranslationService service using Angular's built-in testing framework.
The describe block sets up a test suite for the service, and the beforeEach block is used to configure the testing environment before each test. In this case, it uses Angular's TestBed to configure the testing module by calling TestBed.configureTestingModule({}), which creates an empty module with no dependencies. It then injects the GoogleTranslationService into the service variable using TestBed.inject().
The it block is the actual test case, which checks whether the service variable is truthy, i.e., not null or undefined. If the test passes, it means that the service was successfully created.
Overall, this file tests whether the GoogleTranslationService service can be created using Angular's dependency injection system, which is an important part of ensuring that the service can be used by other components and services in the application.
 25/02/2023 Indika Sirimanna*/
import { TestBed } from '@angular/core/testing';

import { GoogleTranslationService } from './google.translation.service';

describe('GoogleTranslationService', () => {
  let service: GoogleTranslationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleTranslationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
