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

## Description
${templateData.description}

## Table of Contents

## Installation
${templateData.installation}

## Usage
${templateData.usage}

## License
${templateData.license}

## Contributing
${templateData.contributing}

## Questions
${templateData.questions}

`;
};