import { render } from '@testing-library/react';
import MainSplashComponent from './main-splash-component';
describe('MainSplashComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MainSplashComponent />);
    expect(baseElement).toBeTruthy();
  });
});
