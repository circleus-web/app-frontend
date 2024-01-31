import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputWithRadioButtonAndLabelComponent } from './input-with-radio-button-and-label.component';

describe('InputWithRadioButtonAndLabelComponent', () => {
  let component: InputWithRadioButtonAndLabelComponent;
  let fixture: ComponentFixture<InputWithRadioButtonAndLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputWithRadioButtonAndLabelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InputWithRadioButtonAndLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
