import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

    active: boolean;

    searchValue: string;

    constructor() { }

    ngOnInit() {
        this.deactivateSearch();
    }

    activateSearch():void {
        this.active = true;
    }

    deactivateSearch(): void {
        this.active = false;
        this.searchValue = '';
    }

    isActive(): boolean {
        return this.active;
    }

    isSeachValueEmpty(): boolean {
        return this.searchValue == "" || this.searchValue == null;
    }

}
