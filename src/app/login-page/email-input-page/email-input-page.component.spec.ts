import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailInputPageComponent } from './email-input-page.component';

describe('EmailInputPageComponent', () => {
  let component: EmailInputPageComponent;
  let fixture: ComponentFixture<EmailInputPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailInputPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EmailInputPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
