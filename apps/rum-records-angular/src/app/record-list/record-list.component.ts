import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MusicRecord } from './music-record';
import { RecordService } from './record.service';

@Component({
  selector: 'rum-record-store-record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.sass'],
})
export class RecordListComponent {

  public records$: Observable<MusicRecord[]>;

  constructor(private recordService: RecordService, private route: ActivatedRoute) {
    this.records$ = this.recordService.getRecords();
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const terms = params['terms'];
      this.records$ = this.recordService.getRecords(terms);
    })
  }
}