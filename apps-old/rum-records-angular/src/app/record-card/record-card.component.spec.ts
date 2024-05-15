import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordCardComponent } from './record-card.component';

describe('RecordCardComponent', () => {
  let component: RecordCardComponent;
  let fixture: ComponentFixture<RecordCardComponent>;

  const record =  {
    albumId: 2,
    title: 'Sgt Pepper\'s Lonely Hearts Club Band',
    artist: 'The Beatles',
    formats: []
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecordCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RecordCardComponent);
    component = fixture.componentInstance;
    component.record = record;

    fixture.detectChanges();
  });

  it('should render card successfully', () => {
    expect(component).toBeTruthy();
    expect(component.record).toBe(record)
  });
});
