/* eslint-disable no-undef */
describe('Change language', () => {
  it('succesfully changed language', () => {
    cy.visit('/');
    cy.get('[data-cy=Dropdown]').click();
    cy.get('[data-cy=SwitchToEnglish]').click();
    cy.get('[data-cy=CurrentLang]').contains('Language');
  });
});
