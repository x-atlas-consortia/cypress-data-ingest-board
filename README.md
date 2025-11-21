# Data Ingest Board / Usage Dashboard Cypress Tests

## Setup

You need to have node installed on your machine. Then after.
```
npm i .
cp example.cypress.env.json cypress.env.json
```

Update the values in `cypress.env.json`. You can obtain a token via your user menu while logged into the Data Ingest Board. For `displayName`, use the value of the email address associated with the token.

## Running tests
To run tests via the command line, run:
```
npm run cli
```

Otherwise, via the GUI:
```
npm start or
npm run gui
```
