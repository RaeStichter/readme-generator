// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateReadme = require('./src/readme-template');

// TODO: Create an array of questions for user input
//const questions = [];
const questions = readmeData => {
    console.log(`
    ====================================
    Enter Infomration about your project
    ====================================
    `);

    // if there is no information yet, create array to hold data
    if (!readmeData.questions) {
        readmeData.questions = [];
    }
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of the project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project.'
        },
        {
            type: 'installation',
            name: 'title',
            message: 'What steps are required to install your project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use.'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What licenses does this project use? (Check all that apply)',
            choices: ['MIT License','Apache License 2.0', 'Mozilla Public License', 'The Unlicense']
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'How can people contribute?'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What are tests that the user can run?'
        },
        {
            type: 'input',
            name: 'questions',
            message: 'How can people contact you?'
        }
    ]);
};

questions(readmeData => {
    console.log(readmeData);
});

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
