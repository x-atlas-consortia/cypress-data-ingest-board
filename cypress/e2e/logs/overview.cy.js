import {MSGS, PATHS, DATA, SEL, WAIT} from "../../config/constants";

describe(`${MSGS.name}.Logs`, () => {

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
           cy.logsTab(t)
           cy.wait(WAIT.time)
           cy.get('.c-visualizations__chart svg').should('have.length', i)
           i++
        }
    })

    it('Filters table', () => {
        let t = 'apiUsage'
        cy.logsSearchFilter(t, 'entity-api')
    })
})