import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import MainSplashComponent from './main-splash-component';
describe('MainSplashComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BrowserRouter><MainSplashComponent /></BrowserRouter>);
    expect(baseElement).toBeTruthy();
  });

});
