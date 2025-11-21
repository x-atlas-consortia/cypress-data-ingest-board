# Data Ingest Board / Usage Dashboard Cypress Tests

## Setup

You need to have node installed on your machine. Then after:
```
npm i .
cp example.cypress.env.json cypress.env.json
```

### Updating the values in `cypress.env.json`
- You can obtain a Globus `token` via your user menu while logged into the Data Ingest Board.  
- For `displayName`, use the value of the email address associated with the token.  
- `domain` can either be your local setup of the app or more commonly, either https://ingest-board.dev.sennetconsortium.org/ or https://ingest-board.dev.hubmapconsortium.org/ depending on your `token`

### Optional
`username` and `password` corresponds to your https://www.globusid.org/login account. You will not need them unless to run/write certain tests.

## Running tests
To run tests via the command line, run:
```
npm start or
npm run cli
```

Otherwise, via the GUI:
```
npm run gui
```
