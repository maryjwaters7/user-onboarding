describe('Test our inputs and submit our form', function() {
    beforeEach(function() {
        cy.visit('http://localhost:3000/');
    });
    it('Add test to inputs and submit form', function() {
        cy.get('input[name="name"]')
            .type('Mary')
            .should("have.value", "Mary");
        cy.get("input[name='email']")
            .type('email@email.com')
            .should('have.value', 'email@email.com');
        cy.get("input[name='password']")
            .type('abcd1234')
            .should('have.value', 'abcd1234');
        cy.get('[type="checkbox"]')
            .check()
            .should('be.checked');
        cy.get('button').click();
    });
});