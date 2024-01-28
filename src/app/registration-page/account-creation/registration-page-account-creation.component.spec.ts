import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationPageAccountCreationComponent } from './registration-page-account-creation.component';

describe('LoginPageComponent', () => {
  let component: RegistrationPageAccountCreationComponent;
  let fixture: ComponentFixture<RegistrationPageAccountCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationPageAccountCreationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrationPageAccountCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
