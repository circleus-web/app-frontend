import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagesBlockComponent } from './languages-block.component';

describe('LanguagesBlockComponent', () => {
  let component: LanguagesBlockComponent;
  let fixture: ComponentFixture<LanguagesBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguagesBlockComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LanguagesBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
