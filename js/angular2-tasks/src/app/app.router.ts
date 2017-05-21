import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { TaskListComponent } from './task-list/task-list.component';

export const router: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'all-tasks', component: TaskListComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);