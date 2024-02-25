import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPossibilityComponent } from './my-possibility.component';

describe('MyPossibilityComponent', () => {
  let component: MyPossibilityComponent;
  let fixture: ComponentFixture<MyPossibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyPossibilityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyPossibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
