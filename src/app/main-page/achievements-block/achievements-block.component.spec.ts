import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementsBlockComponent } from './achievements-block.component';

describe('AchievementsBlockComponent', () => {
  let component: AchievementsBlockComponent;
  let fixture: ComponentFixture<AchievementsBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AchievementsBlockComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AchievementsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
