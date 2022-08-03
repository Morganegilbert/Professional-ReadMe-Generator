// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {

  if (license === "MIT") {
    let badgeValue = renderLicenseLink(license);
    return badgeValue;
  } else if (license === "GNU GPLv3") {
    let badgeValue = renderLicenseLink(license);
    return badgeValue;
  } else if (license === "Apache License 2.0") {
    let badgeValue = renderLicenseLink(license);
    return badgeValue;
  } else if (license === "Mozilla") {
    let badgeValue = renderLicenseLink(license);
    return badgeValue;
  } else {
    return '';
  }
}

// Function that returns the license link
function renderLicenseLink(license) {
  const map = new Map();

  map.set('MIT', '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)');
  map.set('GNU GPLv3', '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)');
  map.set('Apache License 2.0', '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)');
  map.set('Mozilla', '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)');
  let badgeValue = map.get(license);
  return badgeValue;
}
// Function that returns the license section of README
function renderLicenseSection(license) {
  if (license === "MIT") {
    return `
    MIT License
    A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`;
  } else if (license === "GNU GPLv3") {
    return `
    GNU General Public License v3.0
    Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.`;
  } else if (license === "Apache License 2.0") {
    return `
    Apache License 2.0
    A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`;
  } else if (license === "Mozilla") {
    return `
    Mozilla Public License 2.0
    Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work.`;
  } else {
    return `No License Provided`;
  }
}

// Function to generate markdown for README
function generateMarkdown(answers, license) {
  return `
  # *${answers.name}*
  ${renderLicenseBadge(license)}
  ## Description
  ### ${answers.description}
  
  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  ### To install necessary dependenceies, run the following command:
  
  * ${answers.commandInstall}
  
  ## Usage
  ### ${answers.knowRepo}

  ## License
  ### ${renderLicenseSection(license)}


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
