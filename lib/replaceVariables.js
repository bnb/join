async function replaceVariables (stringifiedTemplate, templateVariables, templateValues) {
  // replace each template variable with the relevant variable

  try {
    // - replace name
    if (stringifiedTemplate.includes(templateVariables.name)) {
      stringifiedTemplate = stringifiedTemplate.replace(new RegExp(templateVariables.name, 'g'), templateValues.name)
    }

    // - replace name
    if (stringifiedTemplate.includes(templateVariables.link)) {
      stringifiedTemplate = stringifiedTemplate.replace(new RegExp(templateVariables.link, 'g'), templateValues.link)
    }
    console.log(stringifiedTemplate)
    return stringifiedTemplate
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = replaceVariables
