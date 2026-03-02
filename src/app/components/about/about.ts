import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage, CommonModule } from '@angular/common';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [ CommonModule],
    templateUrl: './about.html',
    styleUrl: './about.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
    activeTab = 'history';

    setActiveTab(tab: string) {
        this.activeTab = tab;
    }
}
