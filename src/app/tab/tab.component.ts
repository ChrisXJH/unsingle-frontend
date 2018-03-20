import { Component, OnInit } from '@angular/core';
import { TabPanelComponent } from '../tab-panel/tab-panel.component';

@Component({
    selector: 'app-tab',
    templateUrl: './tab.component.html',
    styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

    panels: TabPanelComponent[];

    active: boolean;

    constructor() { }

    ngOnInit() {
    }

}
