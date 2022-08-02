// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license === "MIT");
  console.log("This is license", license);
  if (license === "MIT") {
    let badgeValue = renderLicenseLink(license);
    console.log("This is my badge", badgeValue);
    return badgeValue;
  } else if (license === "GNU GPLv3") {
    return renderLicenseLink(license);
  } else if (license === "Apache License 2.0") {
    return renderLicenseLink(license);
  } else if (license === "ISC") {
    return renderLicenseLink(license);
  } else {
    console.log("Found nothing");
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const map = new Map();
  console.log("License in renderLicenseLink", license);

  map.set('MIT', '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)');
  map.set('GNU GPLv3', '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)');
  map.set('Apache License 2.0', '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)');
  map.set('ISC', '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)');
  let badgeValue = map.get(license);
  console.log("This is my badge value link", badgeValue);
  return badgeValue;
  // let MIT = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  // let GNU = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  // let Apache = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  // let ISC = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let badgeValue = renderLicenseBadge(license);
  console.log("This is my badge value", badgeValue);
  return badgeValue;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers, license) {
  return `
  # *${answers.name}*
  ${renderLicenseSection(license)}
  ## Description
  ### ${answers.description}
  
  ## Table of Contents
  
  * Installation
  * Usage
  * License
  * Contributing
  * Tests
  * Questions
  
  ## Installation
  ### To install necessary dependenceies, run the following command:
  
  * ${answers.commandInstall}
  
  ## Usage
  ### ${answers.knowRepo}

  ## License
  ###  License: ${answers.license}

  ## Contributing
  ### Here is what you need to know to contribute to the repo:
  
  * ${answers.knowRepoContribution}

  ## Tests
  ### To run tests, run the following command: 
  
  * ${answers.commandTests}
  
  ## Questions
  ### If you have anny questions about the repo, open an issue or contact me directly at ${answers.email}. You can find more of my work at https://github.com/${answers.github}.

`;
}

module.exports = generateMarkdown;
