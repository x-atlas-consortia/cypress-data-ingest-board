import {DATA, MSGS, PATHS, SEL} from "../../config/constants";

describe(`${MSGS.name}.Bulk.Edit`, () => {

    beforeEach(() => {
        cy.login()
        cy.visit(PATHS.home)
    })

    it('Can bulk edit', () => {

        cy.search(DATA.datasets.rnaSeq)
        cy.get(`[data-row-key="${DATA.datasets.rnaSeq}"] [type="checkbox"]`).click()
        cy.get(SEL.bulk).click()
        cy.get('.ant-dropdown-menu-title-content').contains('Bulk Edit').click()
        cy.get('#validateOnly_ingest_task').type(`Cypress generated test task ${new Date().toLocaleDateString()}`)
        cy.get('.ant-btn-primary').contains('Submit').click()
        cy.get('.ant-modal').should('have.length', 1)

    })

})