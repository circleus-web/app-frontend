import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { GeneralBlockComponent } from './general-block/general-block.component';
import { AboutBlockComponent } from './about-block/about-block.component';
import { ExperienceBlockComponent } from './experience-block/experience-block.component';
import { SkillsBlockComponent } from './skills-block/skills-block.component';
import { ProjectsBlockComponent } from './projects-block/projects-block.component';
import { EducationBlockComponent } from './education-block/education-block.component';
import { AchievementsBlockComponent } from './achievements-block/achievements-block.component';
import { RecomendationsBlockComponent } from './recomendations-block/recomendations-block.component';
import { LanguagesBlockComponent } from './languages-block/languages-block.component';
import { EmploymentBlockComponent } from './employment-block/employment-block.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
  imports: [
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
  ],
})
export class MainPageComponent {}
