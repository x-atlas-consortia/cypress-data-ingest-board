import {MSGS, PATHS} from "../../config/constants";

describe(`${MSGS.name}.Bulk.Download`, () => {

    beforeEach(() => {
        cy.login()
        cy.visit(PATHS.home)
    })

    it('Downloads CSV file', () => {
        cy.download('datasets-data.csv')
    })

    it('Downloads Metadata file', () => {
        cy.download('data-manifest.txt', '.js-gtm--btn-cta-manifestDownload')
    })
})