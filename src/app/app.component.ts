import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    activePanel: string = 'explore';

    onTabChange(panelName: string): void {
        this.activePanel = panelName;
    }

}
