import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentTypeOptionComponent } from './employment-type-option.component';

describe('EmploymentTypeOptionComponent', () => {
  let component: EmploymentTypeOptionComponent;
  let fixture: ComponentFixture<EmploymentTypeOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmploymentTypeOptionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EmploymentTypeOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
