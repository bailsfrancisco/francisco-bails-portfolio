
import { Component, inject } from '@angular/core';
import { TranslationService } from '../../../../core/i18n/translation.service';

interface Project {
  key: string;
  titleKey: string;
  periodKey: string;
  categoryKey: string;
  descriptionKey: string;
  highlights: string[];
  technologies: string[];
  type: 'professional' | 'personal';
}

@Component({
  selector: 'app-projects-section',
  imports: [],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.scss'
})
export class ProjectsSectionComponent {
  readonly i18n = inject(TranslationService);

  projects: Project[] = [
    {
      key: 'securityManagement',
      periodKey: 'projects.items.securityManagement.period',
      categoryKey: 'projects.items.securityManagement.category',
      titleKey: 'projects.items.securityManagement.title',
      descriptionKey: 'projects.items.securityManagement.description',
      highlights: [
        'projects.items.securityManagement.highlights.0',
        'projects.items.securityManagement.highlights.1',
        'projects.items.securityManagement.highlights.2',
        'projects.items.securityManagement.highlights.3'
      ],
      technologies: [
        '.NET',
        'C#',
        'ASP.NET Core',
        'Angular',
        'TypeScript',
        'SQL Server',
        'IIS'
      ],
      type: 'professional'
    },
    {
      key: 'enterpriseErp',
      periodKey: 'projects.items.enterpriseErp.period',
      categoryKey: 'projects.items.enterpriseErp.category',
      descriptionKey: 'projects.items.enterpriseErp.description',
      titleKey: 'projects.items.enterpriseErp.title',
      highlights: [
        'projects.items.enterpriseErp.highlights.0',
        'projects.items.enterpriseErp.highlights.1',
        'projects.items.enterpriseErp.highlights.2',
        'projects.items.enterpriseErp.highlights.3'
      ],
      technologies: [
        '.NET',
        'C#',
        'ASP.NET Core MVC',
        'Entity Framework Core',
        'SQL Server',
        'JavaScript',
        'jQuery',
        'Bootstrap'
      ],
      type: 'professional'
    },
    {
      key: 'personalPortfolio',
      periodKey: 'projects.items.personalPortfolio.period',
      categoryKey: 'projects.items.personalPortfolio.category',
      descriptionKey: 'projects.items.personalPortfolio.description',
      titleKey: 'projects.items.personalPortfolio.title',
      highlights: [
        'projects.items.personalPortfolio.highlights.0',
        'projects.items.personalPortfolio.highlights.1',
        'projects.items.personalPortfolio.highlights.2',
        'projects.items.personalPortfolio.highlights.3'
      ],
      technologies: [
        'Angular',
        'TypeScript',
        'SCSS',
        'SSR',
        'Azure Static Web Apps',
        'Cloudflare'
      ],
      type: 'personal'
    }
  ];
}
