import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboboxWithLabelComponent } from './combobox-with-label.component';

describe('ComboboxWithLabelComponent', () => {
  let component: ComboboxWithLabelComponent;
  let fixture: ComponentFixture<ComboboxWithLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComboboxWithLabelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ComboboxWithLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
