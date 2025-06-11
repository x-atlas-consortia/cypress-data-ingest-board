import {MSGS, PATHS, DATA, SEL, WAIT} from "../../config/constants";

describe(`${MSGS.name}.Visualizations.Charts`, () => {

    beforeEach(() => {
        cy.login()
        cy.visit(PATHS.home)
    })

    it('Has loaded mini charts', () => {
        cy.get('.c-visualizations__chart').should('have.length', 5)
    })

    it('Clicking mini chart loads in modal', () => {
        cy.get('.c-visualizations__bar').eq(0).click()
        cy.wait(WAIT.time)
        cy.get('#c-visualizations__bar--modal').should('have.length', 1)
    })
})