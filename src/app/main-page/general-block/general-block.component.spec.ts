import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralBlockComponent } from './general-block.component';

describe('GeneralBlockComponent', () => {
  let component: GeneralBlockComponent;
  let fixture: ComponentFixture<GeneralBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralBlockComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GeneralBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
