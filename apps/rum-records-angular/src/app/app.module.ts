import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ApmErrorHandler, ApmModule, ApmService } from '@elastic/apm-rum-angular'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { MainSplashComponent } from './main-splash/main-splash.component';
import { RecordListComponent } from './record-list/record-list.component';
import { RecordService } from './record-list/record.service';
import { RecordCardComponent } from './record-card/record-card.component';
import { EventListComponent } from './event-list/event-list.component';
import { NewsListComponent } from './news-list/news-list.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { environment } from '../environments/environment';

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
    SearchBarComponent
  ],
  imports: [
    ApmModule,
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ApmService,
    {
      provide: ErrorHandler,
      useClass: ApmErrorHandler
    },
    RecordService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {

  constructor(apmService: ApmService) {
    apmService.init({
      serviceName: 'rum-records-angular-ui',
      distributedTracingOrigins: ['http://localhost:8080'], // front to back instrumentation
      serverUrl: environment.elastic_deployment_url,
      serviceVersion: '1',
      environment: 'dev'
    })
  }
}
