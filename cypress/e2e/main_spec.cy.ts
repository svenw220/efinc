describe('main spec', () => {
  it('change age', () => {
    cy.visit('http://localhost:8080/')
    // Das hier failed (ist ja auch ein echter fail!)
    // cy.contains("Angestellt").click()

    cy.contains("Wie alt bist du")
    cy.get('#input_age').clear().type("31")
    cy.compareSnapshot("ChangedAge");

  })
})
