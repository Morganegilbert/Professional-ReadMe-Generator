// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
// Questions: Project Title, Description, Table of Contents, 
// Installation, Usage, License, Contributing, Tests, and Questions

const questions = [
    {
        // What is your GitHub username
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
        validate: usernameInput => {
            if (usernameInput) {
              return true;
            } else {
              console.log('You need to enter a GitHub username!');
              return false;
            }
          }
    },
    {
        // What is your email address?
        type: "input",
        name: "email",
        message: "What is your email address?",
        validate: emailInput => {
            if (emailInput) {
              return true;
            } else {
              console.log('You need to enter an email!');
              return false;
            }
          }
    },    
    {
        // What is your project's name?
        type: "input",
        name: "name",
        message: "What is your project's name?",
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('You need to enter a project name!');
              return false;
            }
          }
    },    
    {
        // Please write a short description of your project
        type: "input",
        name: "description",
        message: "Please write a short description of your project",
        validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('You need to enter a project description!');
              return false;
            }
          }
    },
    {
        //What kind of license should your project have?
        type: "checkbox",
        name: "license",
        message: "What kind of license should your project have?",
        choices: ['MIT', 'GNU GPLv3', 'Apache License 2.0', 'ISC']
    },
    {
        //What command should be run to install dependencies?

        type: "input",
        name: "commandInstall",
        message: "What command should be run to install dependencies?",
        validate: dependenciesInput => {
            if (dependenciesInput) {
              return true;
            } else {
              console.log('You need to enter a command for installing dependencies!');
              return false;
            }
          }
    },
    {
        //What command should be run to run tests?
        type: "input",
        name: "commandTests",
        message: "What command should be run to run tests?",
        validate: commanndInput => {
            if (commanndInput) {
              return true;
            } else {
              console.log('You need to enter a command to run tests!');
              return false;
            }
          }
    },
    {
        //What does the user need to know about using the repo?
        type: "input",
        name: "knowRepo",
        message: "What does the user need to know about using the repo?",
        validate: knowInput => {
            if (knowInput) {
              return true;
            } else {
              console.log('You need to enter information for the user to know about using the repo!');
              return false;
            }
          }
    },
    {
        //What does the user need to know about contributing to the repo?
        type: "input",
        name: "knowRepoContribution",
        message: "What does the user need to know about contributing to the repo?",
        validate: knowContributionInput => {
            if (knowContributionInput) {
              return true;
            } else {
              console.log('You need to enter information for the user to know about contributing to the repo!');
              return false;
            }
          }
    }
]

// TODO: Create a function to write README file
function writeToFile(fileName, readMeInfo) {
    fs.writeFile(fileName, readMeInfo, (err) => 
    err ? console.log(err) : console.log("Generating readMe...")
    )
}

// TODO: Create a function to initialize app
// Initializes and creates the ReadMe file
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers);
        let fileName = "readMe.md";
        let license = answers.license[0];
        console.log("This is license in index", license);
        let readMeInfo = generateMarkdown(answers, license);
        console.log("what is license", license);
        //Use user feedback for...
        writeToFile(fileName, readMeInfo);
    
    })
}

// Function call to initialize app
init();
