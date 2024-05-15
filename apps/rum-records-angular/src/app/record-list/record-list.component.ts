import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, NgFor, NgIf } from '@angular/common';

import { Observable } from 'rxjs';

import { MusicRecord } from './music-record';
import { RecordService } from './record.service';

import { SearchBarComponent } from '../search-bar/search-bar.component';
import { RecordCardComponent } from '../record-card/record-card.component';

@Component({
  selector: 'rum-record-store-record-list',
  standalone: true,
  imports: [ CommonModule, HttpClientModule, NgFor, NgIf, RecordCardComponent, SearchBarComponent ],
  providers: [ RecordService ],
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