import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordListComponent } from './record-list.component';
import { RecordService } from './record.service';

describe('RecordListComponent', () => {
  let component: RecordListComponent;
  let fixture: ComponentFixture<RecordListComponent>;
  
  const mockRecordService = {
    getRecords: jest.fn()
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordListComponent ],
      providers: [ { provide: RecordService, useValue: mockRecordService } ]
    }).compileComponents();

    fixture = TestBed.createComponent(RecordListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    mockRecordService.getRecords.mockImplementationOnce(() => null);
    
    expect(component).toBeTruthy();
    expect(mockRecordService.getRecords).toHaveBeenCalled();
  });
});
