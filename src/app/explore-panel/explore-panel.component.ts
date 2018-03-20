import { Component, OnInit } from '@angular/core';
import { TabPanelComponent } from '../tab-panel/tab-panel.component';

@Component({
    selector: 'app-explore-panel',
    templateUrl: './explore-panel.component.html',
    styleUrls: ['./explore-panel.component.css']
})
export class ExplorePanelComponent implements TabPanelComponent {

    constructor() { }

    ngOnInit() {
    }

}
