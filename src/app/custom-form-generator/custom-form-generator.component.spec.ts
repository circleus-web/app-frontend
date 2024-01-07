import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFormGeneratorComponent } from './custom-form-generator.component';

describe('CustomFormGeneratorComponent', () => {
  let component: CustomFormGeneratorComponent;
  let fixture: ComponentFixture<CustomFormGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomFormGeneratorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomFormGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
