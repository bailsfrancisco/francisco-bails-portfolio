import { Component } from '@angular/core';
import { AboutSectionComponent } from '../../components/about-section/about-section.component';
import { TechStackSectionComponent } from '../../components/tech-stack-section/tech-stack-section.component';

@Component({
  selector: 'app-home',
  imports: [
    AboutSectionComponent,
    TechStackSectionComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  // página principal del portfolio
  profilePicturePath = 'images/profile-picture.png';
}
