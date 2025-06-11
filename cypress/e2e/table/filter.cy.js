import {MSGS, PATHS, SEL, WAIT} from "../../config/constants";

describe(`${MSGS.name}.Table.Filter`, () => {

    beforeEach(() => {
        cy.login()
        cy.visit(PATHS.home)
    })

    it('Can filter', () => {
        cy.get('[aria-label="Status"] .anticon.anticon-filter').as('filterMenu')
        cy.get('@filterMenu').click()
        cy.get('.ant-dropdown-menu-item').contains('New').click()
        cy.get('.ant-btn-primary').contains('OK').click()
        cy.get('.c-badge').each(($el, index, $list) => {
            $el.hasClass('.c-badge--new')
        })
        //cy.wait(WAIT.time)


    })
})