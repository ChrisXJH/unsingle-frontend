import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TabComponent } from './tab/tab.component';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { TabPanelComponent } from './tab-panel/tab-panel.component';
import { ExplorePanelComponent } from './explore-panel/explore-panel.component';


@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    HeaderComponent,
    SearchBarComponent,
    TabPanelComponent,
    ExplorePanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
