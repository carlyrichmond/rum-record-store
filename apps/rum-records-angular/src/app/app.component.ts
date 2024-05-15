import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMugSaucer, faRecordVinyl } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'rum-record-store-root',
  standalone: true,
  imports: [RouterOutlet, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'rum-records-angular';
  faMugSaucer = faMugSaucer;
  faRecordVinyl = faRecordVinyl;
}
