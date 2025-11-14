import {MSGS, PATHS, DATA, SEL, WAIT} from "../../config/constants";

describe(`${MSGS.name}.Logs.Files`, () => {

    beforeEach(() => {
        cy.login()
        cy.visit(PATHS.logs)
    })

    it('Loads overview cards', () => {
        cy.get('.ant-card-head-title').should('have.length', 3)
    })

    it('Filters table', () => {
        let t = 'fileDownloads'
        cy.logsSearchFilter(t, 'SNT524.RZZR.888')
    })

    it('Loads by Dataset Type modal', () => {
        cy.get('.ant-tabs-extra-content .ant-dropdown-trigger').as('tableOpsMenu')
        cy.get('@tableOpsMenu').click()
        cy.get('.ant-dropdown-menu-title-content').contains('View By Dataset Type').click()
        cy.get('.ant-modal-body h4').contains('Downloaded Datasets by Dataset Type')
        cy.get('#c-visualizations__bar--filesByTypes svg .bar--histology').should('have.length', 1)
    })
})