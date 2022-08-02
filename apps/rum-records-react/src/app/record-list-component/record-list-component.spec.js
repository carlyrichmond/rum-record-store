import { render } from '@testing-library/react';
import RecordListComponent from './record-list-component';

describe('RecordListComponent', () => {

  it('should have some records', () => {
    const { container } = render(<RecordListComponent />);
    expect(container).toBeTruthy();

    const cards = container.getElementsByClassName('record-card');
    expect(cards.length).toEqual(20);
  });

});
