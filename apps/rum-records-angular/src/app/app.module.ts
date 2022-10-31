import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { MainSplashComponent } from './main-splash/main-splash.component';
import { RecordListComponent } from './record-list/record-list.component';
import { RecordService } from './record-list/record.service';
import { RecordCardComponent } from './record-card/record-card.component';
import { EventListComponent } from './event-list/event-list.component';

const routes: Routes = [
  { path: '', component: MainSplashComponent },
  { path: 'records', component: RecordListComponent },
  { path: 'events', component: EventListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainSplashComponent,
    RecordCardComponent,
    RecordListComponent,
    EventListComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [RecordService],
  bootstrap: [AppComponent],
})
export class AppModule {}
