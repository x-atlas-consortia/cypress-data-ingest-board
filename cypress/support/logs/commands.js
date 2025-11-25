import { WAIT } from "../../config/constants"

Cypress.Commands.add('logsTab', (tab) => {
    cy.get(`[data-node-key="tab-${tab}"]`, WAIT.timeout).click()
})

Cypress.Commands.add('logsSearchFilter', (tab, keyword) => {
    cy.logsTab(tab)
    cy.get(`#rc-tabs-0-panel-tab-${tab} [type="search"]`, WAIT.timeout).eq(0).type(`${keyword}{enter}`, {force: true})
    cy.get(`#rc-tabs-0-panel-tab-${tab} .ant-table-body .ant-table-row`, WAIT.timeout).should('have.length', 1)
})
