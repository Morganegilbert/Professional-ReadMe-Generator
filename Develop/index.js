// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
// Questions: Project Title, Description, Table of Contents, 
// Installation, Usage, License, Contributing, Tests, and Questions

inquirer.prompt([
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
]).then((answers) => {
    console.log(answers);
    //Use user feedback for...
    const filename = `${answers.name
    .toLowerCase()
    .split(' ')
.join('')}.json`;

//will call writetoFile function here
fs.writeFile(filename, JSON.stringify(answers, null, '\t'), (err) => 
err ? console.log(err) : console.log("Success!")
)
})
//What does the user need to know about contributing to the repo?

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
// will have fs.method

// TODO: Create a function to initialize app
function init() {}

// .then use the generate Markdown function to create the data to be used in writeToFile

// Function call to initialize app
init();
