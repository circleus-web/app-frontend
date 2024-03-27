import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalarySectionComponent } from './salary-section.component';

describe('SalarySectionComponent', () => {
  let component: SalarySectionComponent;
  let fixture: ComponentFixture<SalarySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalarySectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SalarySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
