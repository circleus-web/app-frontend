import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputWithToggleAndLabelComponent } from './input-with-toggle-and-label.component';

describe('InputWithToggleAndLabelComponent', () => {
  let component: InputWithToggleAndLabelComponent;
  let fixture: ComponentFixture<InputWithToggleAndLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputWithToggleAndLabelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InputWithToggleAndLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
