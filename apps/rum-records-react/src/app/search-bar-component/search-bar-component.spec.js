import { render } from '@testing-library/react';
import SearchBarComponent from './search-bar-component';
describe('SearchBarComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SearchBarComponent />);
    expect(baseElement).toBeTruthy();
  });

  it('should contain search input', () => {
    const { getByPlaceholderText } = render(<SearchBarComponent />);
    expect(getByPlaceholderText(/Browse our record selection today!/gi)).toBeTruthy();
  });
});
