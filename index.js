// Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

// Create an array of questions for user input
const questions = [
    {
        type: 'text',
        name: 'projectTitle',
        message: 'What is the title of your project?',
        validate: projectTitleInput => {
            if (projectTitleInput) {
                return true;
            } else {
                console.log('Enter your project title.');
                return false;
            }
        }
    },
    {
        type: 'text',
        name: 'projectDescription',
        message: 'Provide a brief description of your project.',
        validate: projectDescriptionInput => {
            if (projectDescriptionInput) {
                return true;
            } else {
                console.log('Enter a description.');
                return false;
            }
        }
    },
    {
        type: 'text',
        name: 'installInstructions',
        message: 'Provide installation instructions for your project.',
        validate: installInstructionsInput => {
            if (installInstructionsInput) {
                return true;
            } else {
                console.log('Enter installation instructions');
                return false;
            }
        }
    },
    {
        type: 'text',
        name: 'usageInfo',
        message: 'Provide usage information for your project.',
        validate: usageInfoInput => {
            if (usageInfoInput) {
                return true;
            } else {
                console.log('Enter usage information');
                return false;
            }
        }
    },
    {
        type: 'text',
        name: 'contributionGuidelines',
        message: 'Provide contribution guidelines for your project.',
        validate: contributionGuidelinesInput => {
            if (contributionGuidelinesInput) {
                return true;
            } else {
                console.log('Enter contribution guidelines');
                return false;
            }
        }
    },
    {
        type: 'text',
        name: 'testInstructions',
        message: 'Provide test instructions for your project.',
        validate: testInstructionsInput => {
            if (testInstructionsInput) {
                return true;
            } else {
                console.log('Enter test instructions');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license will you be using for your project?',
        choices: ['Apache', 'ISC', 'MIT', 'none']
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your GitHub Username?',
        validate: githubUsernameInput => {
            if (githubUsernameInput) {
                return true;
            } else {
                console.log('Enter your GitHub username');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the Email address to reach you?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Enter your email address');
                return false;
            }
        }
    }
];

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            throw err;
        } else {
            console.log('The Readme file has been generated');
        }
    });
};

// Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(data => {
            writeToFile('./dist/README.md', generateMarkdown(data));
        });
};

// Function call to initialize app
init();