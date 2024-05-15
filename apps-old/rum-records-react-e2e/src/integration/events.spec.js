import { getEventsLabel } from '../support/app.po';
describe('rum-records-react events', () => {
  beforeEach(() => cy.visit('/events'));
  it('should display events', () => {
    getEventsLabel().should('include.text', 'No events scheduled. Check back soon!');
  });
});
