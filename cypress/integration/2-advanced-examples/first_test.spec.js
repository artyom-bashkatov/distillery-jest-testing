describe('Testing something on Google', () => {
  it('I can search something', () => {
    cy.visit('https://google.com');
    cy.get(".gLFyf.gsfi").type('что-то').type('{enter}');
    cy.contains('https://znanieinfo.ru');
  });
})