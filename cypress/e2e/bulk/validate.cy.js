import {DATA, MSGS, PATHS, SEL} from "../../config/constants";

describe(`${MSGS.name}.Bulk.Validate`, () => {

    beforeEach(() => {
        cy.login()
        cy.visit(PATHS.home)
    })

    it('Can bulk validate', () => {

        cy.search(DATA.datasets.rnaSeq)
        cy.get(`[data-row-key="${DATA.datasets.rnaSeq}"] [type="checkbox"]`).click()
        cy.search(DATA.datasets.tenX)
        cy.get(`[data-row-key="${DATA.datasets.tenX}"] [type="checkbox"]`).click()

        // now bulk
        cy.get(SEL.bulk).click()
        cy.get(SEL.bulkValidate).contains('Validate Data').click()

        //remove from list
        cy.get(`[data-row-key="${DATA.datasets.tenX}"] .anticon-close`).click()


        cy.get('.ant-btn-primary span').contains('Submit').click()
        cy.get('.ant-modal').should('have.length', 1)

    })

})