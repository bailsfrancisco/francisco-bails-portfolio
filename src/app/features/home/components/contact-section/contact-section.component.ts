import { Component, inject } from '@angular/core';
import { TranslationService } from '../../../../core/i18n/translation.service';

@Component({
  selector: 'app-contact-section',
  imports: [],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss'
})
export class ContactSectionComponent {
  readonly i18n = inject(TranslationService);
  email = 'franciscobails4@gmail.com';
  linkedinUrl = 'https://www.linkedin.com/in/franciscobails/';
  githubUrl = 'https://github.com/bailsfrancisco';
}
