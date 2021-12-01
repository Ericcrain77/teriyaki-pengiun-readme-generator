// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table-of-Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## [Description](#table-of-contents)

  ${data.projectDescription}

  ## [Installation](#table-of-contents)

  ${data.installInstructions}

  ## [Usage](#table-of-contents)

  ${data.usageInfo}

  ## [Contributing](#table-of-contents)
  
  ${data.contributionGuidelines}

  ## [Tests](#table-of-contents)

  ${data.testInstructions}
  
  ## [Questions](#table-of-contents)

  Contact me:

  [GitHub](https://github.com/${data.githubUsername})
  
  [Email: ${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;