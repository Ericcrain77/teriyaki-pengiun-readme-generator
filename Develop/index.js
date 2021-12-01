// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'text',
        name: 'projectTitle',
        message: 'What is the title of your project?',
        validate: projectTitleInput => {
            if (projectTitleInput) {
                console.log("You've entered a project title.");
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
                console.log("You've entered a description for your project.");
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
                console.log("You've entered installation instructions for your project.");
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
                console.log("You've entered usage information for your project");
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
                console.log("You've entered contribution guidelines for your project.");
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
                console.log("You've entered test instructions for your project.");
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
        choices: ['apache', 'agpl', 'mit', 'none']
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your GitHub Username?',
        validate: githubUsernameInput => {
            if (githubUsernameInput) {
                console.log("You've entered your GitHub username.");
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
                console.log("You've entered your email address.");
                return true;
            } else {
                console.log('Enter your email address');
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('./dist/README.md', data, err => {
        if (err) {
            throw err;
        }
        console.log('The Readme file has been generated');
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(markdownData => {
            return generateMarkdown(markdownData);
        })
        .catch(err => {
            console.log(err);
        });
}

// Function call to initialize app
init();