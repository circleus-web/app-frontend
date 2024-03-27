import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomendationsSectionComponent } from './recomendations-section.component';

describe('RecomendationsSectionComponent', () => {
  let component: RecomendationsSectionComponent;
  let fixture: ComponentFixture<RecomendationsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecomendationsSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RecomendationsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
