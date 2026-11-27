import { Component, inject } from '@angular/core';
import { AboutSectionComponent } from '../../components/about-section/about-section.component';
import { TechStackSectionComponent } from '../../components/tech-stack-section/tech-stack-section.component';
import { ProjectsSectionComponent } from '../../components/projects-section/projects-section.component';
import { ContactSectionComponent } from '../../components/contact-section/contact-section.component';
import { LearningSectionComponent } from '../../components/learning-section/learning-section.component';
import { TranslationService } from '../../../../core/i18n/translation.service';

@Component({
  selector: 'app-home',
  imports: [
    AboutSectionComponent,
    TechStackSectionComponent,
    ProjectsSectionComponent,
    ContactSectionComponent,
    LearningSectionComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  readonly i18n = inject(TranslationService);

  profilePicturePath = 'images/profile-picture.png';

}