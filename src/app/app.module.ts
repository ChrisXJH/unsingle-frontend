import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TabComponent } from './tab/tab.component';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { TabPanelComponent } from './tab-panel/tab-panel.component';


@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    HeaderComponent,
    SearchBarComponent,
    TabPanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
