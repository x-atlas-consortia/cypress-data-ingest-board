import {MSGS, PATHS, DATA, SEL, WAIT} from "../../config/constants";

describe(`${MSGS.name}.Table.Search`, () => {

    beforeEach(() => {
        cy.login()
        cy.visit(PATHS.logs)
    })

    it('Loads overview cards', () => {
        cy.get('.ant-card-head-title').should('have.length', 3)
    })

    it('Loads visualizations', () => {
        let tabs = ["fileDownloads", 'apiUsage', 'openSourceRepos']
        let i = 1
        for (let t of tabs) {
           cy.get(`[data-node-key="tab-${t}"]`).click()
           cy.wait(WAIT.time)
           cy.get('.c-visualizations__chart svg').should('have.length', i)
           i++
        }
    })

    it('Filters table', () => {
        let t = 'apiUsage'
        cy.get(`[data-node-key="tab-${t}"]`).click()
        cy.get('[type="search"]').eq(1).type('entity-api{enter}', {force: true})
        cy.get('#rc-tabs-0-panel-tab-apiUsage .ant-table-body .ant-table-row').should('have.length', 1)
    })
})