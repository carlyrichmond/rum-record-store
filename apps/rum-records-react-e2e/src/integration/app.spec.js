import { getCompanyHeader, getFooterGreeting, getSearchBar } from '../support/app.po';
describe('rum-records-react', () => {
  beforeEach(() => cy.visit('/'));
  it('should display home page with search', () => {
    getCompanyHeader().should('include.text', 'RUM Records');
    getFooterGreeting().contains('with love and excessive amounts of tea');

    getSearchBar().type('Hozier').should('have.value', 'Hozier');
  });
});
