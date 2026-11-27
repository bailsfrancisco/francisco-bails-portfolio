
import { Component, inject } from '@angular/core';
import { TranslationService } from '../../../../core/i18n/translation.service';

interface TechnologyGroup {
  key: string;
  titleKey: string;
  descriptionKey: string;
  technologies: string[];
}

@Component({
  selector: 'app-tech-stack-section',
  imports: [],
  templateUrl: './tech-stack-section.component.html',
  styleUrl: './tech-stack-section.component.scss'
})
export class TechStackSectionComponent {
  readonly i18n = inject(TranslationService);

  readonly technologyGroups: TechnologyGroup[] = [
    {
      key: 'backend',
      titleKey: 'techStack.groups.backend.title',
      descriptionKey: 'techStack.groups.backend.description',
      technologies: [
        'C#',
        '.NET',
        'ASP.NET Core',
        'Entity Framework Core',
        'REST APIs',
        'LINQ'
      ]
    },
    {
      key: 'frontend',
      titleKey: 'techStack.groups.frontend.title',
      descriptionKey: 'techStack.groups.frontend.description',
      technologies: [
        'Angular',
        'TypeScript',
        'JavaScript',
        'HTML5',
        'CSS3',
        'SCSS'
      ]
    },
    {
      key: 'database',
      titleKey: 'techStack.groups.database.title',
      descriptionKey: 'techStack.groups.database.description',
      technologies: [
        'SQL Server',
        'T-SQL',
        'Relational Modeling',
        'Query Optimization'
      ]
    },
    {
      key: 'architecture',
      titleKey: 'techStack.groups.architecture.title',
      descriptionKey: 'techStack.groups.architecture.description',
      technologies: [
        'Clean Architecture',
        'Repository Pattern',
        'Unit of Work',
        'Specification Pattern',
        'Multitenancy'
      ]
    },
    {
      key: 'cloud',
      titleKey: 'techStack.groups.cloud.title',
      descriptionKey: 'techStack.groups.cloud.description',
      technologies: [
        'Microsoft Azure',
        'Git',
        'GitHub',
        'IIS',
        'Hangfire',
        'SignalR'
      ]
    },
    {
      key: 'ai',
      titleKey: 'techStack.groups.ai.title',
      descriptionKey: 'techStack.groups.ai.description',
      technologies: [
        'ChatGPT',
        'Claude Code',
        'GitHub Copilot',
        'Prompt Engineering',
        'AI Agents'
      ]
    }
  ];
}
