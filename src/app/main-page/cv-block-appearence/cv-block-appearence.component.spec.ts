import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvBlockAppearenceComponent } from './cv-block-appearence.component';

describe('CvBlockAppearenceComponent', () => {
  let component: CvBlockAppearenceComponent;
  let fixture: ComponentFixture<CvBlockAppearenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvBlockAppearenceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CvBlockAppearenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
