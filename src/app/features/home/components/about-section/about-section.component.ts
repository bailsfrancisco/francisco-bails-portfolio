import { Component, inject } from '@angular/core';
import { TranslationService } from '../../../../core/i18n/translation.service';

@Component({
  selector: 'app-about-section',
  imports: [],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss'
})
export class AboutSectionComponent {
  readonly i18n = inject(TranslationService);
}
