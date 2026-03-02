import { Component, AfterViewInit, OnDestroy, ChangeDetectorRef, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer implements AfterViewInit, OnDestroy {
  currentLang: 'ar' | 'en' = 'ar';
  private observer: MutationObserver | null = null;
  readonly isBrowser: boolean;

  dict = {
    ar: {
      subscribe_title: "اشترك للحصول على آخر التحديثات!",
      subscribe_placeholder: "أدخل بريدك الإلكتروني",
      subscribe_btn: "اشترك الآن",
      about_title: "عن الشركة",
      about_desc: "هايدرو ميتال هي الشركة الرائدة في إنتاج قطاعات وسليندرات الألومنيوم، نقدم لعملائنا أعلى معايير الجودة والاحترافية بخبرات متراكمة منذ عام 1999.",
      since_text: "منذ 1999",
      useful_links: "روابط هامة",
      link_about: "عن الشركة",
      link_careers: "الوظائف",
      link_privacy: "سياسة الخصوصية",
      link_pricing: "الأسعار",
      link_contact: "اتصل بنا",
      link_projects: "المشاريع",
      link_blog: "المدونة",
      link_services: "الخدمات",
      link_team: "الفريق",
      link_terms: "شروط الاستخدام",
      office_address: "عنوان المكتب",
      address_text: "مبنى أرك- B123 - مكتب 104 - القرية الذكية ك 28 طريق مصر اسكندرية الصحراوي",
      email_address: "البريد الإلكتروني",
      email_text: "مهتم بالعمل معنا؟",
      phone_number: "رقم الهاتف",
      follow_us: "تابعنا",
      copyright: "© 2026 هايدرو ميتال. جميع الحقوق محفوظة."
    },
    en: {
      subscribe_title: "Sign up to get the latest updates!",
      subscribe_placeholder: "Enter Your Email",
      subscribe_btn: "Subscribe Now",
      about_title: "About Company",
      about_desc: "Hydro Metal is a leading company in producing aluminum profiles and cylinders, providing the highest standards of quality and professionalism since 1999.",
      since_text: "Since 1999",
      useful_links: "Useful Links",
      link_about: "About Us",
      link_careers: "Careers",
      link_privacy: "Privacy Policy",
      link_pricing: "Pricing",
      link_contact: "Contact",
      link_projects: "Projects",
      link_blog: "Blog",
      link_services: "Services",
      link_team: "Team",
      link_terms: "Terms of use",
      office_address: "Office Address",
      address_text: "Arc Bldg-B123, Office 104, Smart Village, Km 28 Cairo-Alex Desert Rd",
      email_address: "Email Address",
      email_text: "Interested in working with us?",
      phone_number: "Phone Number",
      follow_us: "Follow Us",
      copyright: "© 2026 Hydro Metal. All rights reserved."
    }
  };

  constructor(private cdr: ChangeDetectorRef, @Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  get t() {
    return this.dict[this.currentLang];
  }

  ngAfterViewInit() {
    if (this.isBrowser) {
      this.currentLang = document.documentElement.dir === 'ltr' ? 'en' : 'ar';

      this.observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.attributeName === 'dir') {
            this.currentLang = document.documentElement.dir === 'ltr' ? 'en' : 'ar';
            this.cdr.detectChanges();
          }
        });
      });

      this.observer.observe(document.documentElement, { attributes: true });
      this.cdr.detectChanges();
    }
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  scrollToTop() {
    if (this.isBrowser) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
