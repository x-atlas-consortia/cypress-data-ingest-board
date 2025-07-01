import {DATA, MSGS, PATHS, SEL} from "../../config/constants";

describe(`${MSGS.name}.Bulk.Process`, () => {

    beforeEach(() => {
        cy.login()
        cy.visit(PATHS.home)
    })

    it('Can bulk process', () => {

        cy.search(DATA.datasets.rnaSeq)
        cy.get(`[data-row-key="${DATA.datasets.rnaSeq}"] [type="checkbox"]`).click()
        cy.search(DATA.datasets.tenX)
        cy.get(`[data-row-key="${DATA.datasets.tenX}"] [type="checkbox"]`).click()

        // now bulk
        cy.get(SEL.bulk).click()
        cy.get(SEL.bulkProcess).contains('Submit For Processing').click()

        //remove from list
        cy.get(`[data-row-key="${DATA.datasets.tenX}"] .anticon-close`).click()


        cy.get('.ant-btn-primary').contains('Submit').click()
        cy.get('.ant-modal').should('have.length', 1)

    })

})