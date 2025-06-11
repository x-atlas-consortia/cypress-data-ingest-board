import {MSGS, PATHS, DATA, SEL, WAIT} from "../../config/constants";

describe(`${MSGS.name}.Table.Search`, () => {

    beforeEach(() => {
        cy.login()
        cy.visit(PATHS.home)
    })

    it('Can Search, can search uploads and show respective Dataset', () => {
        cy.get(SEL.switchBtn).click()
        cy.search(DATA.uploads.reorganized)
        cy.get(SEL.entityDropdown).contains(DATA.uploads.reorganized).click()
        cy.get('.ant-btn').contains('Show Datasets').click()
        cy.wait(WAIT.time)
        cy.get('.ant-table-row').should('have.length', 3)

    })
})