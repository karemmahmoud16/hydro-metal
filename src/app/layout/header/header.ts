import { afterNextRender, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  isDarkMode: boolean = false;
  currentLang: string = 'ar';
  isMobileMenuOpen: boolean = false;

  constructor() {
    // السحر هنا: الكود ده مش هيشتغل على السيرفر، هيشتغل في البراوزر بس
    afterNextRender(() => {
      document.documentElement.dir = 'rtl';
    });
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;

    if (this.isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }

  toggleLanguage(): void {
    if (this.currentLang === 'ar') {
      this.currentLang = 'en';
      document.documentElement.dir = 'ltr';
    } else {
      this.currentLang = 'ar';
      document.documentElement.dir = 'rtl';
    }
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    // Prevent body scrolling when menu is open
    if (this.isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
}
