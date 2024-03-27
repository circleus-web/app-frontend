import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardsSectionComponent } from './rewards-section.component';

describe('RewardsSectionComponent', () => {
  let component: RewardsSectionComponent;
  let fixture: ComponentFixture<RewardsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RewardsSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RewardsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
