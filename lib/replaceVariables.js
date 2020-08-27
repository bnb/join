async function replaceVariables (stringifiedTemplate, templateVariables, templateValues) {
  // replace each template variable with the relevant variable

  try {
    // - replace name
    if (stringifiedTemplate.includes(templateVariables.name)) {
      console.log(`\nReplacing ${templateVariables.name} with ${templateValues.name}...`)
      stringifiedTemplate = stringifiedTemplate.replace(new RegExp(templateVariables.name, 'g'), templateValues.name)
    }

    // - replace name
    if (stringifiedTemplate.includes(templateVariables.link)) {
      console.log(`Replacing ${templateVariables.link} with ${templateValues.link}...`)
      stringifiedTemplate = stringifiedTemplate.replace(new RegExp(templateVariables.link, 'g'), templateValues.link)
    }

    // - replace all
    if (stringifiedTemplate.includes(templateVariables.all)) {
      console.log(`\nReplacing ${templateVariables.all} with:\n\n${templateValues.all}`)
      stringifiedTemplate = stringifiedTemplate.replace(new RegExp(templateVariables.all, 'g'), templateValues.all)
    }

    return stringifiedTemplate
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = replaceVariables
