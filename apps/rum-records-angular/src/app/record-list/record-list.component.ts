import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MusicRecord } from './music-record';
import { RecordService } from './record.service';

@Component({
  selector: 'rum-record-store-record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.sass'],
})
export class RecordListComponent {

  public records$: Observable<MusicRecord[]> | null;

  constructor(private recordService: RecordService) {
    this.records$ = this.recordService.getRecords();
  }
}