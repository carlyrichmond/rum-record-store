import { render } from '@testing-library/react';
import RecordCardComponent from './record-card-component';
describe('RecordCardComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RecordCardComponent />);
    expect(baseElement).toBeTruthy();
  });
});
