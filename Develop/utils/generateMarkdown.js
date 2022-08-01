// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.name}

  ## Description
  ### ${data.description};
  
  ## Table of Contents
  * Installation
  * Usage
  * License
  * Contributing
  * Tests
  * Questions
  
  ## Installation
  ### To install necessary dependenceies, run the following command:
  * ${data.commandInstall};

  ## Usage
  ### ${data.knowRepo};

  ## License
  ###  ${data.license};

  ## Contributing
  ### Here is what you need to know to contribute to the repo:
  * ${data.knowRepoContribution};

  ## Tests
  ### To run tests, run the following command: 
  * ${data.commandTests};

  ## Questions
  ### If you have anny questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at ${data.github}.

`;
}

module.exports = generateMarkdown;
