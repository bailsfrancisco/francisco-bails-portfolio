
import { computed, Injectable, signal } from '@angular/core';
import { es } from './translations/es';
import { en } from './translations/en';

export type Language = 'es' | 'en';

const translations = {
  es,
  en
};

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  private readonly currentLanguage = signal<Language>('es');

  readonly language = this.currentLanguage.asReadonly();

  readonly dictionary = computed(
    () => translations[this.currentLanguage()]
  );

  setLanguage (language: Language): void {
    this.currentLanguage.set(language);
  }

  setLanguageFromUrl (url: string): void {
    const language = url.split('?')[0].split('#')[0].split('/')[1];

    this.setLanguage(language === 'en' ? 'en' : 'es');
  }

  translate (key: string): string {
    const parts = key.split('.');
    let current: unknown = this.dictionary();

    for (const part of parts) {
      if (Array.isArray(current)) {
        const index = Number(part);

        if (!Number.isInteger(index) || index < 0 || index >= current.length) {
          return key;
        }

        current = current[index];
        continue;
      }

      if (
        current !== null &&
        typeof current === 'object' &&
        Object.prototype.hasOwnProperty.call(current, part)
      ) {
        current = (current as Record<string, unknown>)[part];
        continue;
      }

      return key;
    }

    return typeof current === 'string' ? current : key;
  }
}
