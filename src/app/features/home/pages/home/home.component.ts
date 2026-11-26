import { Component } from '@angular/core';
import { AboutSectionComponent } from '../../components/about-section/about-section.component';
import { TechStackSectionComponent } from '../../components/tech-stack-section/tech-stack-section.component';
import { ProjectsSectionComponent } from '../../components/projects-section/projects-section.component';
import { ContactSectionComponent } from '../../components/contact-section/contact-section.component';

@Component({
  selector: 'app-home',
  imports: [
    AboutSectionComponent,
    TechStackSectionComponent,
    ProjectsSectionComponent,
    ContactSectionComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  // página principal del portfolio
  profilePicturePath = 'images/profile-picture.png';
}
