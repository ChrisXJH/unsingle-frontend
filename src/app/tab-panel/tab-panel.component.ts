import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-tab-panel',
    templateUrl: './tab-panel.component.html',
    styleUrls: ['./tab-panel.component.css']
})
export class TabPanelComponent implements OnInit {

    active: boolean;

    constructor() { }

    ngOnInit() {
    }

    isActive: boolean {
        return this.active;
    }

}
