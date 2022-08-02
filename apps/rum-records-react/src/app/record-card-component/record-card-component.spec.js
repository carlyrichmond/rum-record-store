import { render } from '@testing-library/react';
import RecordCardComponent from './record-card-component';

describe('RecordCardComponent', () => {
  it('should render card successfully', () => {

    const record = {
      title: 'Sgt Pepper\'s Lonely Hearts Club Band',
      artist: 'The Beetles',
      formats: ['CD', 'LP'],
      imagePath: '../img.avif'
    };

    const { baseElement } = render(<RecordCardComponent record={record}/>);
    expect(baseElement).toBeTruthy();

    const title = baseElement.getElementsByTagName('h2')[0];
    console.log(title.textContent);
    expect(title.textContent).toBe(record.title);
    
    const artist = baseElement.getElementsByTagName('h3')[0];
    expect(artist.textContent).toBe(record.artist);

  });
});
