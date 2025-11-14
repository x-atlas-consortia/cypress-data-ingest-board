Cypress.Commands.add('logsTab', (tab) => {
    cy.get(`[data-node-key="tab-${tab}"]`).click()
})

Cypress.Commands.add('logsSearchFilter', (tab, keyword) => {
    cy.logsTab(tab)
    cy.get(`#rc-tabs-0-panel-tab-${tab} [type="search"]`).eq(0).type(`${keyword}{enter}`, {force: true})
    cy.wait(1000)
    cy.get(`#rc-tabs-0-panel-tab-${tab} .ant-table-body .ant-table-row`).should('have.length', 1)
})
