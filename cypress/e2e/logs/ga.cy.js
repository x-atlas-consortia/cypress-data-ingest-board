import {MSGS, PATHS, DATA, SEL, WAIT} from "../../config/constants";

describe(`${MSGS.name}.Usage.GA`, () => {

    beforeEach(() => {
        cy.login()
        cy.visit(PATHS.logs + '/ga')
    })

    it('Loads report', () => {
        cy.get('iframe').should('have.length', 1)
    })


})