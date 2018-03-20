import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TabPanelComponent } from '../tab-panel/tab-panel.component';

@Component({
    selector: 'app-tab',
    templateUrl: './tab.component.html',
    styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

    panels: object;

    active: boolean;

    activePanel: string;

    @Output() onTabChange = new EventEmitter<string>();

    constructor() { }

    ngOnInit() {
        this.activePanel = "explore";

        this.panels = {
            "explore": { active: false },
            "message": { active: false },
            "events": { active: false },
            "settings": { active: false }
        };
        this.activatePanel(this.activePanel);
    }

    isPanelActive(panelName: string): boolean {
        return this.panels[panelName].active;
    }

    activatePanel(panelName: string) {
        this.panels[this.activePanel].active = false;
        this.panels[panelName].active = true;
        this.activePanel = panelName;
        this.onTabChange.emit(this.getActivePanel());
    }

    getActivePanel(): string {
        return this.activePanel;
    }

}
