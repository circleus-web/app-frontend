import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationsSectionComponent } from './educations-section.component';

describe('EducationsSectionComponent', () => {
  let component: EducationsSectionComponent;
  let fixture: ComponentFixture<EducationsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationsSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EducationsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
