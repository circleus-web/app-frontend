import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { HeaderComponent } from '../header/header.component';

import { AboutBlockComponent } from './about-block/about-block.component';
import { AchievementsBlockComponent } from './achievements-block/achievements-block.component';
import { CertificatesBlockComponent } from './certificates-block/certificates-block.component';
import { EducationBlockComponent } from './education-block/education-block.component';
import { EmploymentBlockComponent } from './employment-block/employment-block.component';
import { ExperienceBlockComponent } from './experience-block/experience-block.component';
import { GeneralBlockComponent } from './general-block/general-block.component';
import { LanguagesBlockComponent } from './languages-block/languages-block.component';
import { ProjectsBlockComponent } from './projects-block/projects-block.component';
import { RecomendationsBlockComponent } from './recomendations-block/recomendations-block.component';
import { SalaryBlockComponent } from './salary-block/salary-block.component';
import { SkillsBlockComponent } from './skills-block/skills-block.component';
import { ToolButtonComponent } from './tool-button/tool-button.component';

enum UsedBreakpoints {
  LARGE = 'large',
  MEDIUM = 'medium',
  SMALL = 'small',
  X_SMALL = 'x_small',
}

@Component({
  selector: 'app-main-page',
  standalone: true,
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
  imports: [
    CommonModule,
    HeaderComponent,
    GeneralBlockComponent,
    AboutBlockComponent,
    ExperienceBlockComponent,
    SkillsBlockComponent,
    ProjectsBlockComponent,
    EducationBlockComponent,
    AchievementsBlockComponent,
    RecomendationsBlockComponent,
    LanguagesBlockComponent,
    EmploymentBlockComponent,
    SalaryBlockComponent,
    CertificatesBlockComponent,
    ToolButtonComponent,
  ],
})
export class MainPageComponent implements OnInit {
  protected m_currentBreakpoint: UsedBreakpoints = UsedBreakpoints.LARGE;

  constructor(private breakpointObserver: BreakpointObserver) {}

  private readonly m_breakpoint$ = this.breakpointObserver.observe([
    Breakpoints.Large,
    Breakpoints.Medium,
    Breakpoints.Small,
    Breakpoints.XSmall,
  ]);

  private m_breakpointChanged() {
    if (this.breakpointObserver.isMatched(Breakpoints.XSmall)) {
      this.m_currentBreakpoint = UsedBreakpoints.X_SMALL;
    } else if (this.breakpointObserver.isMatched(Breakpoints.Small)) {
      this.m_currentBreakpoint = UsedBreakpoints.SMALL;
    } else if (this.breakpointObserver.isMatched(Breakpoints.Medium)) {
      this.m_currentBreakpoint = UsedBreakpoints.MEDIUM;
    } else if (this.breakpointObserver.isMatched(Breakpoints.Large)) {
      this.m_currentBreakpoint = UsedBreakpoints.LARGE;
    }
  }

  ngOnInit(): void {
    this.m_breakpoint$.subscribe(this.m_breakpointChanged.bind(this));
  }
}
