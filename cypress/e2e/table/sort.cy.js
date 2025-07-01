import {MSGS, PATHS, SEL, WAIT} from "../../config/constants";

describe(`${MSGS.name}.Table.Sort`, () => {

    beforeEach(() => {
        cy.login()
        cy.visit(PATHS.home)
    })

    it('Can Sort', () => {
        cy.get('#status').click()

        cy.get('.c-badge').each(($el, index, $list) => {
            $el.hasClass('.c-badge--error')
        })

    })
})