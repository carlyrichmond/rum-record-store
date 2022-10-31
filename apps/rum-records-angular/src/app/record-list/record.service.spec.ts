import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';

import { TestBed } from '@angular/core/testing';

import { RecordService } from './record.service';
import { MusicRecord } from './music-record';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

describe('RecordService', () => {
  let service: RecordService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ RecordService ]
    });
    service = TestBed.inject(RecordService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should initialize service', () => {
    expect(service).toBeTruthy();
  })

  it('should GET and enrich records', () => {
    const dummyRecords: MusicRecord[] = [
      {
        albumId: 2,
        title: 'Sgt Pepper\'s Lonely Hearts Club Band',
        artist: 'The Beatles',
        formats: ['CD', 'LP']
      },
      {
        albumId: 100,
        title: 'Sam\'s Town',
        artist: 'The Killers',
        formats: ['CD', 'LP']
      }
    ];

    service.getRecords().subscribe(records => {
      expect(records).toHaveLength(2);
      expect(records).toEqual(dummyRecords);
    });

    const url = `${environment.baseUrl}/records/`;
    const request = httpTestingController.expectOne(url);
    expect(request.request.method).toBe('GET');
    request.flush(dummyRecords);
    
  });
});
