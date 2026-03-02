import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './projects.html',
    styleUrls: ['./projects.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects {
    projectsList = [
        {
            title: 'محطات المونوريل بأكتوبر',
            category: 'مشروعات قومية',
            image: '/projects/image1.png'
        },
        {
            title: 'جامعة مصر للعلوم والتكنولوجيا',
            category: 'مشروعات تعليمية',
            image: '/projects/image2.png'
        },
        {
            title: 'مركز مصر الثقافي الإسلامي بالعاصمة الإدارية الجديدة',
            category: 'مشروعات ثقافية ودينية',
            image: '/projects/image3.png'
        },
        {
            title: 'المصرف المتحد بالعاصمة الإدارية',
            category: 'مشروعات إدارية ومصرفية',
            image: '/projects/image4.png'
        }
    ];
}
