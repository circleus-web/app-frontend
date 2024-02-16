import { TestBed } from '@angular/core/testing';

import { RegistrationFormArrayProviderService } from './registration-form-array-provider.service';

describe('RegistrationFormArrayProviderService', () => {
  let service: RegistrationFormArrayProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrationFormArrayProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
