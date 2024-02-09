import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryBlockComponent } from './salary-block.component';

describe('SalaryBlockComponent', () => {
  let component: SalaryBlockComponent;
  let fixture: ComponentFixture<SalaryBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalaryBlockComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SalaryBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
