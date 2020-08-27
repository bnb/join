const fs = require('fs').promises

const replace = require('./lib/replaceVariables')
const stringify = require('./lib/stringifyTemplate')

async function build () {
  const meetings = require('./template/meetings.json').entries // get the entries array - allows us to forEach easily
  const template = await stringify('./template/template.html')

  const variables = { // set this up as a variable so it's not hardcoded and can clearly be edited
    name: '{{MEETING:NAME}}',
    link: '{{MEETING:LINK}}'
  }

  meetings.forEach(async (entry) => { // loop over each entry, create the page from the template, and write that page out
    const name = entry.name
    const filename = entry.filename
    const link = entry.link

    console.log(`\nStarting to work on ${name}...`)
    const returnedTemplate = await replace(template, variables, { name: name, link: link })
    fs.writeFile(`./docs/${filename}.html`, returnedTemplate)
  })
}

build()
