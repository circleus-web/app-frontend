import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillAccountInfoComponent } from './fill-account-info.component';

describe('FillAccountInfoComponent', () => {
  let component: FillAccountInfoComponent;
  let fixture: ComponentFixture<FillAccountInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FillAccountInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FillAccountInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
