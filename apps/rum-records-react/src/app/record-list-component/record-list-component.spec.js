import { render } from '@testing-library/react';
import RecordListComponent from './record-list-component';
describe('RecordListComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RecordListComponent />);
    expect(baseElement).toBeTruthy();
  });
});
