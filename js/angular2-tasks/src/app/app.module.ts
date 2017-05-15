import { routes } from './app.router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TaskListComponent } from './task-list/task-list.component';
import { MainMenuComponent } from './common/main-menu/main-menu.component';
import { SideNavComponent } from './common/side-nav/side-nav.component';
import { ContentAreaComponent } from './common/content-area/content-area.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    TaskListComponent,
    MainMenuComponent,
    SideNavComponent,
    ContentAreaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
