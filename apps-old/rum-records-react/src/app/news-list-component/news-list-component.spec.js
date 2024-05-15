import { render } from '@testing-library/react';
import NewsListComponent from './news-list-component';
describe('NewsListComponent', () => {
  it('should render successfully', () => {
    const { getByText } = render(<NewsListComponent />);
    expect(getByText(/Unable to obtain news/gi)).toBeTruthy();
  });
});
