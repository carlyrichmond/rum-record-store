import { Routes } from '@angular/router';
import { MainSplashComponent } from './main-splash/main-splash.component';
import { RecordListComponent } from './record-list/record-list.component';
import { EventListComponent } from './event-list/event-list.component';
import { NewsListComponent } from './news-list/news-list.component';

export const routes: Routes = [
    { path: '', component: MainSplashComponent },
    { path: 'records', component: RecordListComponent },
    { path: 'events', component: EventListComponent },
    { path: 'news', component: NewsListComponent },
  ];
