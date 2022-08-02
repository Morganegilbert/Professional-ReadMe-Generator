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
        message: "What is your GitHub username?"
    },
    {
        // What is your email address?
        type: "input",
        name: "email",
        message: "What is your email address?"
    },    
    {
        // What is your project's name?
        type: "input",
        name: "name",
        message: "What is your project's name?"
    },    
    {
        // Please write a short description of your project
        type: "input",
        name: "description",
        message: "Please write a short description of your project"
    },
    {
        //What kind of license should your project have?
        type: "input",
        name: "license",
        message: "What kind of license should your project have?"
    },
    {
        //What command should be run to install dependencies?

        type: "input",
        name: "commandInstall",
        message: "What command should be run to install dependencies?"
    },
    {
        //What command should be run to run tests?
        type: "input",
        name: "commandTests",
        message: "What command should be run to run tests?"
    },
    {
        //What does the user need to know about using the repo?
        type: "input",
        name: "knowRepo",
        message: "What does the user need to know about using the repo?"
    },
    {
        //What does the user need to know about contributing to the repo?
        type: "input",
        name: "knowRepoContribution",
        message: "What does the user need to know about contributing to the repo?"
    }
]

// TODO: Create a function to write README file
function writeToFile(answers) {
    fs.writeFile("ReadMe.md", JSON.stringify(answers, null, '\t'), (err) => 
    err ? console.log(err) : console.log("Success!")
    )
}

// TODO: Create a function to initialize app
// Initializes and creates the ReadMe file
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers);
        let fileName = "ReadMe.md";
        let readMeInfo = generateMarkdown(answers);
        //Use user feedback for...
        writeToFile(fileName, readMeInfo);
    
    })
}

// Function call to initialize app
init();
