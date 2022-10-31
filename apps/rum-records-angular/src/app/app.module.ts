import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { MainSplashComponent } from './main-splash/main-splash.component';
import { RecordListComponent } from './record-list/record-list.component';
import { RecordService } from './record-list/record.service';

const routes: Routes = [
  { path: '', component: MainSplashComponent },
  { path: 'records', component: RecordListComponent },
]

@NgModule({
  declarations: [AppComponent, MainSplashComponent, RecordListComponent],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [RecordService],
  bootstrap: [AppComponent]
})
export class AppModule {}
