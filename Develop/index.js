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
            message: 'What is the title of the project?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your Project name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please provide a description of the project!');
                    return false;
                }
            }
        },
        {
            type: 'installation',
            name: 'title',
            message: 'What steps are required to install your project?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please include installation steps, if there are none, please indicate!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please provide instructions and examples!');
                    return false;
                }
            }
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
            message: 'How can people contribute?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please provide how people can contribute!');
                    return false;
                }
            } 
        },
        {
            type: 'confirm',
            name: 'confirmTests',
            message: 'Would you like to include tests?',
            default: true
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide test information:',
            when: ({ confirmTests}) => {
                if (confirmTests) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Please enter you Github Username',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter you Github Username!');
                    return false;
                }
            }
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
