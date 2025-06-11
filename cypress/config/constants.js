const MSGS = {
    name: 'Data Ingest Board',
}

const SEL = {
    switchBtn: '.js-gtm--btn-cta-switch',
    entityDropdown: '.js-gtm--btn-cta-entityDropdown'
}

const URLS = {
    domain: Cypress.env('domain') || 'https://data.dev.sennetconsortium.org/',
}

const PATHS = {
    home: URLS.domain,
}

const WAIT = {
    time: Cypress.env('wait_time') || 1000
}

const DATA = {
    uploads: {
        reorganized: 'SNT775.JZRF.852'
    }
}


export { URLS, WAIT, PATHS, MSGS, SEL, DATA }