import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsBlockComponent } from './projects-block.component';

describe('ProjectsBlockComponent', () => {
  let component: ProjectsBlockComponent;
  let fixture: ComponentFixture<ProjectsBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsBlockComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
