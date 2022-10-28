import { Component } from '@angular/core';

import { faMugSaucer, faRecordVinyl } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'rum-record-store-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  faMugSaucer = faMugSaucer;
  faRecordVinyl = faRecordVinyl;
}
