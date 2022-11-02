import { MusicRecord } from './music-record.model';
import { allRecords, filterRecords } from './records';

describe('records', () => {
    it('returns records matching query', () => {
        const expectedRecords: MusicRecord[] = [
            {
                albumId: 1, 
                title: 'Abbey Road', 
                artist: 'The Beatles',
                formats: ['CD', 'LP', 'DD']
            },
            {
                albumId: 2, 
                title: 'Sgt Pepper\'s Lonely Hearts Club Band',
                artist: 'The Beatles', 
                formats: ['CD', 'LP', 'DD']
            }
        ];
    
        const filteredRecords: MusicRecord[] = filterRecords('beat');
        expect(filteredRecords).toEqual(expectedRecords);
    });

    it('returns all records with no query', () => {
        const filteredRecords: MusicRecord[] = filterRecords();
        expect(filteredRecords).toEqual(allRecords);
    });
  });