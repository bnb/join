const fs = require('fs').promises

async function stringifyTemplate (template) {
  const fetchtedTemplate = await fs.readFile(template)
  const stringifiedTemplate = await fetchtedTemplate.toString('utf8')

  return stringifiedTemplate
}

module.exports = stringifyTemplate
