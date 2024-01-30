import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomendationsBlockComponent } from './recomendations-block.component';

describe('RecomendationsBlockComponent', () => {
  let component: RecomendationsBlockComponent;
  let fixture: ComponentFixture<RecomendationsBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecomendationsBlockComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RecomendationsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
