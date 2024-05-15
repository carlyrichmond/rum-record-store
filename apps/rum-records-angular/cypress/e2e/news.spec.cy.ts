import { getNewsLabel } from '../support/app.po';
describe('rum-records-react news', () => {
  beforeEach(() => cy.visit('/news'));
  it('should display news label', () => {
    getNewsLabel().should('include.text', 'Unable to obtain news');
  });
});
