import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialityItemComponent } from './speciality-item.component';

describe('SpecialityItemComponent', () => {
  let component: SpecialityItemComponent;
  let fixture: ComponentFixture<SpecialityItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialityItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SpecialityItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
