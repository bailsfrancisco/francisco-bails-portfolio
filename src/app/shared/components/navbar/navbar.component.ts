import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TranslationService, Language } from '../../../core/i18n/translation.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  readonly i18n = inject(TranslationService);

  private readonly router = inject(Router);

  switchLanguage (): void {
    const currentLanguage = this.i18n.language();
    const targetLanguage: Language =
      currentLanguage === 'es' ? 'en' : 'es';

    const currentUrl = this.router.parseUrl(this.router.url);

    const segments =
      currentUrl.root.children['primary']?.segments
        .map(segment => segment.path) ?? [];

    if (segments.length > 0) {
      segments[0] = targetLanguage;
    } else {
      segments.push(targetLanguage);
    }

    const targetUrl = this.router.createUrlTree(
      ['/', ...segments],
      {
        queryParams: currentUrl.queryParams,
        fragment: currentUrl.fragment || undefined
      }
    );

    this.router.navigateByUrl(targetUrl);
  }

}