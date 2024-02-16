import { TestBed } from '@angular/core/testing';

import { LoginFormArrayProviderService } from './login-form-array-provider.service';

describe('LoginFormArrayProviderService', () => {
  let service: LoginFormArrayProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginFormArrayProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
