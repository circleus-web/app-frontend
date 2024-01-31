import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputWithCheckboxAndLabelComponent } from './input-with-checkbox-and-label.component';

describe('InputWithCheckboxAndLabelComponent', () => {
  let component: InputWithCheckboxAndLabelComponent;
  let fixture: ComponentFixture<InputWithCheckboxAndLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputWithCheckboxAndLabelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InputWithCheckboxAndLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
