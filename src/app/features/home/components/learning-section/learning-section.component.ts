
import { Component, inject } from '@angular/core';
import { TranslationService } from '../../../../core/i18n/translation.service';

interface Course {
  key: string;
  categoryKey: string;
  titleKey: string;
  institution?: string;
  platform?: string;
  status: 'in-progress' | 'completed';
  targetYear?: number;
  topics: string[];
  type: 'academic' | 'course';
}

@Component({
  selector: 'app-learning-section',
  imports: [],
  templateUrl: './learning-section.component.html',
  styleUrl: './learning-section.component.scss'
})
export class LearningSectionComponent {
  readonly i18n = inject(TranslationService);

  courses: Course[] = [
    {
      key: 'computerEngineering',
      categoryKey: 'learning.items.computerEngineering.category',
      titleKey: 'learning.items.computerEngineering.title',
      institution: 'Universidad Nacional del Noroeste de la Provincia de Buenos Aires',
      status: 'completed',
      topics: [],
      type: 'academic'
    },
    {
      key: 'systemsAnalyst',
      categoryKey: 'learning.items.systemsAnalyst.category',
      titleKey: 'learning.items.systemsAnalyst.title',
      institution: 'Universidad Nacional del Noroeste de la Provincia de Buenos Aires',
      status: 'completed',
      topics: [],
      type: 'academic'
    },
    {
      key: 'dotnetBackend',
      categoryKey: 'learning.items.dotnetBackend.category',
      titleKey: 'learning.items.dotnetBackend.title',
      platform: 'Udemy',
      status: 'in-progress',
      targetYear: 2026,
      topics: [
        '.NET Core',
        'C#',
        'SQL Server',
        'JWT Authentication',
        'Backend Security'
      ],
      type: 'course'
    }
  ];
}
