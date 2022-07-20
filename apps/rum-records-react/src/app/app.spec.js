import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './app';
describe('App', () => {

  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should have company name as the title', () => {
    const { getByText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(getByText(/Rum Records/gi)).toBeTruthy();
  });

  it('should have a greeting in the footer', () => {
    const { getByText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(getByText(/with love and excessive amounts of tea/gi)).toBeTruthy();
  });

});
