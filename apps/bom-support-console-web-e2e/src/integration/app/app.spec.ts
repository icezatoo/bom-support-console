describe('bom-support-console-web: App component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=app--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Hello world!');
  });
});
