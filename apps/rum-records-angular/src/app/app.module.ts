import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { MainSplashComponent } from './main-splash/main-splash.component';
import { RecordListComponent } from './record-list/record-list.component';
import { RecordService } from './record-list/record.service';
import { RecordCardComponent } from './record-card/record-card.component';
import { EventListComponent } from './event-list/event-list.component';
import { NewsListComponent } from './news-list/news-list.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

const routes: Routes = [
  { path: '', component: MainSplashComponent },
  { path: 'records', component: RecordListComponent },
  { path: 'events', component: EventListComponent },
  { path: 'news', component: NewsListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MainSplashComponent,
    RecordCardComponent,
    RecordListComponent,
    EventListComponent,
    NewsListComponent,
    SearchBarComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [RecordService],
  bootstrap: [AppComponent],
})
export class AppModule {}
