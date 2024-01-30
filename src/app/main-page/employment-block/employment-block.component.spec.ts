import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentBlockComponent } from './employment-block.component';

describe('EmploymentBlockComponent', () => {
  let component: EmploymentBlockComponent;
  let fixture: ComponentFixture<EmploymentBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmploymentBlockComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EmploymentBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
