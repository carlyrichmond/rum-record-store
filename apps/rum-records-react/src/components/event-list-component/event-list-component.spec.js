import { render } from '@testing-library/react';
import EventListComponent from './event-list-component';
describe('EventListComponent', () => {
  it('should render successfully', () => {
    const { getByText } = render(<EventListComponent />);
    expect(getByText(/No events scheduled. Check back soon!/gi)).toBeTruthy();
  });
});
