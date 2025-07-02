import {MSGS, PATHS, SEL, WAIT} from "../../config/constants";

describe(`${MSGS.name}.Table.Sort`, () => {

    beforeEach(() => {
        cy.login()
        cy.visit(PATHS.home)
    })

    it('Can Sort.Status', () => {
        cy.sort('#status', '.c-badge', '.c-badge--error')
    })

    it('Can Sort.Dataset Type', () => {
        cy.sort('#dataset_type', '.field-dataset_type', null, 'Visium (with probes)')
    })

    it('Can Sort on Upload', () => {
        cy.get(SEL.switchBtn).contains('SWITCH TO UPLOADS').click()
        cy.wait(WAIT.time)
        cy.sort('#group_name', 'td#group_name .txt-break-spaces', null, 'CODCC', 4)
        cy.sort('#intended_organ', 'td#intended_organ span', null, 'Other', 2)
    })



})