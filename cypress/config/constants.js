const MSGS = {
    name: 'Data Ingest Board',
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


export { URLS, WAIT, PATHS, MSGS }