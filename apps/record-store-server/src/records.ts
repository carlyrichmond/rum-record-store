import { MusicRecord } from './music-record.model';

export const allRecords: MusicRecord[] = [
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
    },
    {
        albumId: 3, 
        title: 'True Blue', 
        artist: 'Madonna', 
        formats: ['CD', 'LP']
    },
    {
        albumId: 4, 
        title: 'Born in the USA', 
        artist: 'Bruce Springsteen', 
        formats: ['CD', 'LP', 'DD']
    },
    {
        albumId: 5, 
        artist: 'Grace Jones', 
        title: 'Island Life', 
        formats: []
    },
    {
        albumId: 6, 
        title: 'The Dark Side of the Moon', 
        artist: 'Pink Floyd',
        formats: ['CD', 'LP', 'DD']
    },
    {
        albumId: 7, 
        title: 'Unknown Pleasures', 
        artist: 'Joy Division',
        formats: ['CD', 'LP', 'DD']
    },
    {
        albumId: 8, 
        title: 'Rumours', 
        artist: 'Fleetwood Mac',
        formats: ['CD', 'LP', 'DD']
    },
    {
        albumId: 9, 
        title: 'Nevermind', 
        artist: 'Nirvana', 
        formats: ['CD']
    },
    {
        albumId: 10, 
        title: 'Aladdin Sane', 
        artist: 'David Bowie', 
        formats: ['CD', 'LP', 'DD']
    },
    {
        albumId: 11, 
        title: 'The Dreaming', 
        artist: 'Kate Bush',
        formats: ['CD', 'LP', 'DD']
    },
    {
        albumId: 12, 
        title: 'Definitely Maybe', 
        artist: 'Oasis',
        formats: ['CD', 'LP', 'DD']
    },
    {
        albumId: 13, 
        title: 'Sticky Fingers',
        artist: 'The Rolling Stones',
        formats: ['CD', 'LP', 'DD']
    },
    {
        albumId: 14, 
        title: 'Parallel Lines', 
        artist: 'Blondie',
        formats: ['CD']
    },
    {
        albumId: 15, 
        title: 'The Freewheelin\' Bob Dylan', 
        artist: 'Bob Dylan',
        formats: ['LP']
    },
    {
        albumId: 16, 
        title: 'Led Zeppelin', 
        artist: 'Led Zeppelin',
        formats: ['CD', 'LP', 'DD']
    },
    {
        albumId: 17, 
        title: 'London Calling', 
        artist: 'The Clash',
        formats: ['CD', 'LP', 'DD']
    },
    {
        albumId: 18, 
        title: 'Straight Outta Compton', 
        artist: 'NWA', 
        formats: ['LP']
    },
    {
        albumId: 19, 
        title: 'The Ramones', 
        artist: 'The Ramones', 
        formats: ['CD', 'LP', 'DD']
    },
    {
        albumId: 20, 
        title: 'Ready to Die', 
        artist: 'The Notorious BIG', 
        formats: ['CD', 'LP', 'DD']
    }
];

export function filterRecords(query?: string): MusicRecord[] {

    if (!query){
        return allRecords;
    }

    return allRecords.filter(record => {
        return record.artist.toLowerCase().includes(query) || 
        record.title.toLowerCase().includes(query)
      });
}