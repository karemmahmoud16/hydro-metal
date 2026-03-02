import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Inject, NgZone, PLATFORM_ID, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Hero } from '../../components/hero/hero';
import { About } from '../../components/about/about';
import { Profiles } from '../../components/profiles/profiles';
import { Products } from '../../components/products/products';
import { Projects } from '../../components/projects/projects';

@Component({
  imports: [RouterModule, CommonModule, Hero, About, Profiles, Products, Projects],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements AfterViewInit {
  @ViewChild('statsSection') statsSection!: ElementRef;
  private observer!: IntersectionObserver;

  // الأرقام الكبيرة بهيبتها زي ما طلبت
  stats = [
    { label: 'عاماً من الخبرة', target: 25, currentText: '0' },
    { label: 'طن ألومنيوم مبثوق سنوياً', target: 4800, currentText: '0' },
    { label: 'طن ألومنيوم مؤكسد سنوياً', target: 3600, currentText: '0' },
    { label: 'طن ألومنيوم مطلي سنوياً', target: 1200, currentText: '0' }
  ];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone
  ) { }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              this.startCounters();
              this.observer.disconnect();
            }
          });
        }, { threshold: 0.1 });

        if (this.statsSection) {
          this.observer.observe(this.statsSection.nativeElement);
        }
      }, 100);
    }
  }
  // ضيف دي مع المتغيرات اللي فوق
  @ViewChild('sliderWrapper') sliderWrapper!: ElementRef;

  // الدالة دي المسؤولة عن تقليب السلايدر يمين وشمال بنعومة
  scrollSlider(direction: number) {
    if (this.sliderWrapper) {
      // 390 دي اللي هي عرض الكارت (360) + المسافة اللي بينهم (30)
      const scrollAmount = direction * 390;
      this.sliderWrapper.nativeElement.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  }
  startCounters() {
    // الأنيميشن هياخد ثانيتين بالظبط
    this.stats.forEach(stat => {
      this.animateValue(stat, 2000);
    });
  }

  animateValue(stat: any, duration: number) {
    if (isPlatformBrowser(this.platformId)) {
      this.ngZone.runOutsideAngular(() => {
        let startTimestamp: number | null = null;
        const target = stat.target;

        const step = (timestamp: number) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);

          // خلينا قوة الفرملة 3 بدل 4 عشان ميعلقش في آخر جزء من الثانية
          const easeOut = 1 - Math.pow(1 - progress, 3);

          // السحر هنا: التقريب الذكي Math.round بدل Math.floor بيقفل الرقم بدون وقفة
          const currentValue = Math.round(easeOut * target);

          this.ngZone.run(() => {
            // بنتأكد إن الرقم عمره ما يعدي الهدف (Target) 
            stat.currentText = Math.min(currentValue, target).toString();
            this.cdr.detectChanges();
          });

          // شيلنا شرط الـ else خالص لأنه مبقاش ليه لازمة وهيكمل برواز لحد النهاية
          if (progress < 1) {
            window.requestAnimationFrame(step);
          }
        };

        window.requestAnimationFrame(step);
      });
    }
  }
}