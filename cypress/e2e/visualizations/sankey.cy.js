import {MSGS, PATHS, DATA, SEL, WAIT} from "../../config/constants";

describe(`${MSGS.name}.Visualizations.Sankey`, () => {

    beforeEach(() => {
        cy.login()
        cy.visit(PATHS.home)
    })

    it('Can filter and see filtered item in sankey', () => {
        cy.appFilter( 'Organ Type', 'Lung')
        cy.get('.js-cell__organType').each(($el, index, $list) => {
            cy.wrap($el).contains(/^Lung*/)
        })

        cy.get('.js-gtm--btn-cta-viewSankey').invoke('removeAttr', 'target').click()
        cy.url()
            .should('include', '/sankey')

        cy.get('react-consortia-sankey').shadow().find('.c-sankey__node--organ_type').each(($el, index, $list) => {
            cy.wrap($el).contains(/^Lung*/)
        })
    })
})