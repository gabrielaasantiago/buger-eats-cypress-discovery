describe('home page', () => {
  it('app deve es ar online', () => {
    cy.viewport(1400, 900)
    cy.visit('https://buger-eats.vercel.app')
    cy.get('h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
  })
})