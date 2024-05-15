import { getCompanyHeader, getFooterGreeting, getRecordCards, getSearchBar } from '../support/app.po';

describe('rum-records-react', () => {
  beforeEach(() => cy.visit('/'));
  it('should display home page with search bar', () => {
    getCompanyHeader().should('include.text', 'RUM Records');
    getFooterGreeting().contains('with love and excessive amounts of tea');

    getSearchBar().type('Hozier').should('have.value', 'Hozier');
  });

  it('should search for records on enter', () => {
    getSearchBar().type('Beatle{enter}');

    cy.location().should((location) => {
      expect(location.pathname).to.eq('/records');
      expect(location.search).to.eq('?terms=beatle');
    });

    getRecordCards().should('have.length', 2);
  });

});
