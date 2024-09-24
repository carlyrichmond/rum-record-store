import { getNewsLabel, getNewsSubscribeButton } from '../support/app.po';
describe('rum-records-react news', () => {
  beforeEach(() => cy.visit('/news'));
  
  it('should display news label', () => {
    getNewsLabel().should('include.text', 'Unable to obtain news');
  });

  it('should generate alert', () => {
    getNewsSubscribeButton().click();
    
    cy.on('window:alert',(message)=>{
      expect(message).to.contains('Thank you for subscribing!');
   })
  });
});
