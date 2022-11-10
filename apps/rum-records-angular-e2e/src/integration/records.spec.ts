import { getCompanyHeader, getFooterGreeting, getRecordCards, getSearchBar } from '../support/app.po';
describe('rum-records-react records', () => {
  beforeEach(() => cy.visit('/records'));
  it('should display records', () => {
    getCompanyHeader().should('include.text', 'RUM Records');
    getFooterGreeting().contains('with love and excessive amounts of tea');

    getRecordCards().should('have.length', 20)
  });

  it('should search for records on enter', () => {
    getSearchBar().type('fleet{enter}');

    cy.location().should((location) => {
      expect(location.pathname).to.eq('/records');
      expect(location.search).to.eq('?terms=fleet');
    });

    getRecordCards().should('have.length', 1);
  });
});
