// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateReadme = require('./src/readme-template');
const generateMarkdown = require('./utils/generateMarkdown');

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
            type: 'title',
            name: 'installation',
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
            choices: ['MIT License','Apache License 2.0', 'Mozilla Public License', 'IBM Public License Version 1.0']
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
            type: 'input',
            name: 'tests',
            message: 'Provide test information:',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please provide test information!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your Github Username',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your Github Username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your Github Username!');
                    return false;
                }
            }
        }
    ]);
};

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./README.md', fileContent, err => {
        // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
        if (err) {
          reject(err);
          // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
          return;
        }
  
        // if everything went well, resolve the Promise and send the successful data to the `.then()` method
        resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
  };


questions(readmeData => {
    console.log(readmeData);
})
.then(readmeData => {
    return generateMarkdown(readmeData);
})
.then(pageMarkdown => {
    return writeFile(pageMarkdown);
});




// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
