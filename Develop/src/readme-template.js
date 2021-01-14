// const generateContent = valueHere => {
//     return `
//     ${valueHere}
//     `;
// };

module.exports = templateData => {
    // destructure page data by section
    const {title, description, installation, usage, license, contributing, questions} = templateData;

return `
# ${templateData.title}
_____________________________

### Description
_____________________________
${templateData.description}

### Table of Contents
_____________________________


### Installation
_____________________________
${templateData.installation}

### Usage
_____________________________
${templateData.usage}

### License
_____________________________
${templateData.license}
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

### Contributing
_____________________________
${templateData.contributing}

### Questions
_____________________________
${templateData.questions}

`;
};