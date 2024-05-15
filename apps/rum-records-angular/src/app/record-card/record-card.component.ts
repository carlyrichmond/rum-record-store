import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCompactDisc, faFileAudio, faRecordVinyl } from '@fortawesome/free-solid-svg-icons';
import { MusicRecord } from '../record-list/music-record';

@Component({
  selector: 'rum-record-store-record-card',
  standalone: true,
  imports: [FontAwesomeModule, NgFor, NgIf],
  templateUrl: './record-card.component.html',
  styleUrls: ['./record-card.component.sass'],
})
export class RecordCardComponent {

  @Input()
  public record!: MusicRecord;

  protected formatIconMap = {
    'LP': faRecordVinyl,
    'CD': faCompactDisc,
    'DD': faFileAudio
  };
}
