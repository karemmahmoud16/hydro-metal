import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-profiles',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './profiles.html',
    styleUrl: './profiles.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Profiles {
    profilesList = [
        {
            id: '01',
            title: 'قطاعات قياسية',
            description: 'صُنعت لتجمع بين الجودة والمتانة، تقدم مجموعة واسعة من القطاعات القياسية المصممة لتلبي احتياجاتك الصناعية والمعمارية بدقة وكفاءة.',
            image: '/images/قطاعات قياسية.jpg'
        },
        {
            id: '02',
            title: 'الشبابيك والأبواب',
            description: 'مجموعة متميزة من قطاعات الألومنيوم المصممة لتناسب مختلف أنماط النوافذ والأبواب، تجمع بين المتانة، الجمال، والعزل المثالي.',
            image: '/images/الشبابيك والأبواب.jpg'
        },
        {
            id: '03',
            title: 'كاسرات الشمس',
            description: 'حلول كاسرات الشمس الفعالة لتقليل الحرارة وتحسين كفاءة الطاقة في المباني بتحكم ذكي في أشعة الشمس وتوازن بين الجمال والوظيفة.',
            image: '/images/كاسرات الشمس.jpg'
        },
        {
            id: '04',
            title: 'درابزينات الألومنيوم',
            description: 'هياكل مصممة خصيصًا لمجموعة متنوعة من الاستخدامات المعمارية ومتطلبات السلامة تجمع بين القوة والأناقة ومقاومة التآكل.',
            image: '/images/درابزينات الألومنيوم.jpg'
        }
    ];
}
