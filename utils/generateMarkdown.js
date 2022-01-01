// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = '';

  if (license === 'Apache') {
    licenseBadge = 'https://img.shields.io/badge/License-Apache%202.0-blue.svg';
    return licenseBadge;
  } else if (license === 'ISC') {
    licenseBadge = 'https://img.shields.io/badge/License-ISC-blue.svg';
    return licenseBadge;
  } else if (license === 'MIT') {
    licenseBadge = 'https://img.shields.io/badge/License-MIT-yellow.svg';
    return licenseBadge;
  } else if (license === 'none') {
    return licenseBadge;
  } else {
    console.log(err);
  }
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';

  if (license === 'Apache') {
    licenseLink = 'https://choosealicense.com/licenses/apache-2.0/';
    return licenseLink;
  } else if (license === 'ISC') {
    licenseLink = 'https://choosealicense.com/licenses/isc/';
    return licenseLink;
  } else if (license === 'MIT') {
    licenseLink = 'https://choosealicense.com/licenses/mit/';
    return licenseLink;
  } else if (license === 'none') {
    return licenseLink;
  } else {
    console.log(err);
  }
}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'none') {
    license = '';
    return license;
  } else {
    return `
## License

![${license} License](${renderLicenseBadge(license)})
    `;
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.projectTitle}

${renderLicenseSection(data.license)}

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