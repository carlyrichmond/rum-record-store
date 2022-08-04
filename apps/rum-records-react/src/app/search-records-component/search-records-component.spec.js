import { render } from '@testing-library/react';
import SearchRecordsComponent from './search-records-component';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: "localhost:4200/records"
  })
}));

describe('SearchRecordsComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SearchRecordsComponent />);
    expect(baseElement).toBeTruthy();
  });
});
