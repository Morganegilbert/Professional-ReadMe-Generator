// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // let licenseBadge = 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # *${answers.name};*
  ## License ${answers.license}
  ## Description
  ### ${answers.description};
  
  ## Table of Contents
  
  * Installation
  * Usage
  * License
  * Contributing
  * Tests
  * Questions
  
  ## Installation
  ### To install necessary dependenceies, run the following command:
  
  * ${answers.commandInstall};
  
  ## Usage
  ### ${answers.knowRepo};

  ## License
  ###  License: ${answers.license};

  ## Contributing
  ### Here is what you need to know to contribute to the repo:
  
  * ${answers.knowRepoContribution};

  ## Tests
  ### To run tests, run the following command: 
  
  * ${answers.commandTests};
  
  ## Questions
  ### If you have anny questions about the repo, open an issue or contact me directly at ${answers.email}. You can find more of my work at https://github.com/${answers.github}.

`;
}

module.exports = generateMarkdown;
