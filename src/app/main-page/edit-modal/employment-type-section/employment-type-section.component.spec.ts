import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentTypeSectionComponent } from './employment-type-section.component';

describe('EmploymentTypeSectionComponent', () => {
  let component: EmploymentTypeSectionComponent;
  let fixture: ComponentFixture<EmploymentTypeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmploymentTypeSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EmploymentTypeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
