import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-services',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './services.html',
    styleUrl: './services.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Services {
    servicesList = [
        {
            id: '01',
            title: 'قطاعات الألومنيوم',
            description: 'حلول الألومنيوم المصممة حسب الطلب لتلبية كافة احتياجاتك الصناعية بدقة متناهية وظروف مطابقة للمعايير.',
            image: '/images/service-1.png'
        },
        {
            id: '02',
            title: 'تشطيب الأسطح',
            description: 'إنتاج القطاعات طبقاً للمعالجة الحرارية المطلوبة لضمان أعلى جودة ومتانة مع قدرات تشطيب فائقة.',
            image: '/images/service-2.png'
        },
        {
            id: '03',
            title: 'سلندرات الألومنيوم',
            description: 'إنتاج سلندرات الألومنيوم عن طريق أفران الصهر بمقاسات وأطوال مختلفة لأفضل أداء مستمر.',
            image: '/images/service-3.png'
        },
        {
            id: '04',
            title: 'إنتاج الإسطمبات',
            description: 'جميع مراحل تصميم وتصنيع الإسطمبات المستخدمة في السحب بأعلى دقة واحترافية كاملة.',
            image: '/images/service-4.png'
        }
    ];
}
