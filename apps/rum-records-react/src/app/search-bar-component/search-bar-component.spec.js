import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import SearchBarComponent from './search-bar-component';

describe('SearchBarComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BrowserRouter><SearchBarComponent /></BrowserRouter>);
    expect(baseElement).toBeTruthy();
  });

  it('should contain search input', () => {
    const { getByPlaceholderText } = render(<BrowserRouter><SearchBarComponent /></BrowserRouter>);
    expect(getByPlaceholderText(/Browse our record selection today!/gi)).toBeTruthy();
  });
});
