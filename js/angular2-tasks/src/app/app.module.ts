import { routes } from './app.router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { TaskListComponent } from './task-list/task-list.component';
import { MainMenuComponent } from './common/main-menu/main-menu.component';
import { SideNavComponent } from './common/side-nav/side-nav.component';
import { ContentAreaComponent } from './common/content-area/content-area.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { TaskDataComponent } from './task-data/task-data.component';

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'all-tasks', component: TaskListComponent },
  { path: '', component: HomepageComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    TaskListComponent,
    MainMenuComponent,
    SideNavComponent,
    ContentAreaComponent,
    HomepageComponent,
    ContactPageComponent,
    TaskDataComponent
  ],
  imports: [
   RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
