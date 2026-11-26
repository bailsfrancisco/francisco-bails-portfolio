import { Component } from '@angular/core';

interface TechnologyGroup {
  title: string;
  description: string;
  technologies: string[];
}

@Component({
  selector: 'app-tech-stack-section',
  imports: [],
  templateUrl: './tech-stack-section.component.html',
  styleUrl: './tech-stack-section.component.scss'
})
export class TechStackSectionComponent {
  readonly technologyGroups: TechnologyGroup[] = [
    {
      title: 'Backend development',
      description: 'Desarrollo de aplicaciones y servicios',
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
      title: 'Frontend development',
      description: 'Interfaces web modernas y responsivas',
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
      title: 'Database',
      description: 'Persistencia y gestión de datos',
      technologies: [
        'SQL Server',
        'T-SQL',
        'Relational Modeling',
        'Query Optimization'
      ]
    },
    {
      title: 'Architecture & Engineering',
      description: 'Diseño y organización de soluciones',
      technologies: [
        'Clean Architecture',
        'Repository Pattern',
        'Unit of Work',
        'Specification Pattern',
        'Multitenancy'
      ]
    },
    {
      title: 'Cloud & Tools',
      description: 'Infraestructura y herramientas de desarrollo',
      technologies: [
        'Microsoft Azure',
        'Git',
        'GitHub',
        'IIS',
        'Hangfire',
        'SignalR'
      ]
    }
  ];
}
