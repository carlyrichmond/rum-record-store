const records = [{
    title: 'Hot Fuss',
    artist: 'The Killers',
    formats: ['Vinyl', 'CD', 'Digital Download'],
    imagePath: '../../assets/images/records/killers-the-hot-fuss.png'
},
{
    title: 'Sam\'s Town',
    artist: 'The Killers',
    formats: ['CD', 'Digital Download'],
    imagePath: '../../assets/images/records/killers-sams-town.jpg'
},
{
    title: 'Future Nostalgia',
    artist: 'Dua Lipa',
    formats: ['Vinyl', 'CD'],
    imagePath: '../../assets/images/records/dua-lipa-future-nostalgia.png'
},
{
    title: 'The Dark Side of the Moon',
    artist: 'Pink Floyd',
    formats: ['CD', 'LP', 'Digital Download'],
    imagePath: '../../assets/images/records/pink-floyd-dark-side-of-the-moon.webp'
},
{
    title: 'Rumours',
    artist: 'Fleetwood Mac',
    formats: ['CD', 'LP'],
    imagePath: '../../assets/images/records/fleetwood-mac-rumours.png'
},
{
    title: 'Nevermind',
    artist: 'Nirvana',
    formats: ['CD', 'Digital Download'],
    imagePath: '../../assets/images/records/nirvana-nevermind.png'
},
{
    title: 'Aladdin Sane',
    artist: 'David Bowie',
    formats: ['CD', 'LP', 'Digital Download'],
    imagePath: '../../assets/images/records/david-bowie-aladdin-sane.webp'
}
];

export function getRecords() {
    return records;
}