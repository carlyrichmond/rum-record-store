import { render } from '@testing-library/react';
import RecordListComponent from './record-list-component';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe('RecordListComponent', () => {
  it('should render component', () => {
    const { container } = render(<RecordListComponent/>);
    expect(container).toBeTruthy();
  });

});
