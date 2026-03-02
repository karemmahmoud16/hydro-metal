import { ChangeDetectionStrategy, Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-products',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './products.html',
    styleUrl: './products.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Products implements AfterViewInit, OnDestroy {
    @ViewChild('sliderTrack', { static: false }) sliderTrack!: ElementRef;

    isVisible = false;
    private observer: IntersectionObserver | null = null;

    constructor(private cdr: ChangeDetectorRef) { }

    ngAfterViewInit() {
        if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
            this.observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            this.isVisible = true;
                            this.cdr.detectChanges();
                            this.observer?.disconnect();
                        }
                    });
                },
                { threshold: 0.1 }
            );

            if (this.sliderTrack) {
                this.observer.observe(this.sliderTrack.nativeElement);
            }
        } else {
            this.isVisible = true;
            this.cdr.detectChanges();
        }
    }

    ngOnDestroy() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }

    productsList = [
        {
            id: '01',
            title: 'قطاعات الألومنيوم',
            description: 'مجموعات متكاملة من القطاعات اللازمة للسيارات، الأبواب، الواجهات، الطاقة الشمسية، والمطابخ بأعلى المعايير.',
            image: '/images/service-1.png'
        },
        {
            id: '02',
            title: 'إنتاج سليندرات الألومنيوم',
            description: 'ننتج سليندرات ألومنيوم عن طريق أفران الصهر بمقاسات 5، 7، 8 بوصة وبأطوال تصل إلى 4.5 متر.',
            image: '/images/service-2.png'
        },
        {
            id: '03',
            title: 'تصنيع اسطمبات سحب ألومنيوم',
            description: 'نمتلك 6 ماكينات CNC ومخارط وحفر بالشرارة لجميع مراحل تصنيع الإسطمبات بدقة وهندسة متميزة.',
            image: '/images/service-3.png'
        },
        {
            id: '04',
            title: 'الاستشارات الهندسية',
            description: 'نقدم الاستشارات ونتشارك خبراتنا لمساعدة عملائنا على تنفيذ مشاريعهم بأعلى درجات الدقة والاحترافية.',
            image: '/images/service-4.png'
        },
        {
            id: '05',
            title: 'الأكسدة والأنودة',
            description: 'الشركة الرائدة بـ 25 حوض أنودة لإنتاج جميع الألوان بخبرة التحليل الكهربائي وحماية تصل إلى 25 ميكرون.',
            image: '/images/service-1.png'
        },
        {
            id: '06',
            title: 'طلاء البودرة الكهروستاتيكي',
            description: 'خدمات طلاء بألوان RAL المتنوعة وبسمك 60 إلى 80 ميكرون لتشطيب متين ومقاوم للتآكل بحماية تدوم.',
            image: '/images/service-2.png'
        }
    ];
}
