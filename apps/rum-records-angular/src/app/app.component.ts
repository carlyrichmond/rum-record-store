import { Component, ErrorHandler } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ApmErrorHandler, ApmModule, ApmService } from '@elastic/apm-rum-angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMugSaucer, faRecordVinyl } from '@fortawesome/free-solid-svg-icons';

import { environment } from '../environments/environment';

@Component({
  selector: 'rum-record-store-root',
  standalone: true,
  imports: [ApmModule, RouterOutlet, FontAwesomeModule],
  providers: [ApmService, {
      provide: ErrorHandler,
      useClass: ApmErrorHandler
    }],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'rum-records-angular';
  faMugSaucer = faMugSaucer;
  faRecordVinyl = faRecordVinyl;

  constructor(apmService: ApmService) {
    apmService.init({
      serviceName: 'rum-records-angular-ui',
      distributedTracingOrigins: ['http://localhost:8080'], // front to back instrumentation
      serverUrl: environment.elastic_deployment_url,
      serviceVersion: '1',
      environment: 'dev',
      // How to enable debug mode if needed
      //logLevel: 'debug'
    });
  }
}
