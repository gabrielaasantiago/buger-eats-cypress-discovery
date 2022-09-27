describe('home page', () => {
  it('app deve es ar online', () => {
    cy.visit('/')
    cy.get('h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
  })
})