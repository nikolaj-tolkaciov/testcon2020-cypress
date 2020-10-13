import './commands'

const credentials = require("../helpers/credentials")
require('cypress-xpath')
Cypress.config('baseUrl', `https://${credentials.user}:${credentials.password}@d1uemyzvpgpuwg.cloudfront.net`)