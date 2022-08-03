import { getCompanyHeader, getFooterGreeting, getRecordCards } from '../support/app.po';
describe('rum-records-react records', () => {
  beforeEach(() => cy.visit('/records'));
  it('should display records', () => {
    getCompanyHeader().should('include.text', 'RUM Records');
    getFooterGreeting().contains('with love and excessive amounts of tea');

    getRecordCards().should('have.length', 20)
  });
});
