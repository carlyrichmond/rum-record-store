import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { MusicRecord } from './music-record';

@Injectable()
export class RecordService {

  constructor(private http: HttpClient) { }

  public getRecords(query?: string): Observable<MusicRecord[]> {
    let url = `${environment.baseUrl}/records`;

    if (query) {
      url += `/${query}`;
    }

    return this.http.get<MusicRecord[]>(url).pipe(map(
      ( records: MusicRecord[] ) => {
        return this.enrichRecordsWithImages(records);
    }), 
    catchError((error: { message: string; }) => {
      console.log(`Error: ${error.message}`);
      return of([]);
    }));
  }

  private enrichRecordsWithImages(records: MusicRecord[]): MusicRecord[] {
    const baseImageURL = '../../assets/images/records';

    return records.map((record) => {
      const filename = `${baseImageURL}/${record.albumId}.avif`;
      return {...record, imagePath: filename}
    });
  }
}
