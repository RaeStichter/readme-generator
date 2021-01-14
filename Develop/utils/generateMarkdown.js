const availableLicenses = [
  {name: 'MIT License', badge: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`, link: `[License: MIT](https://opensource.org/licenses/MIT)`},
  {name: 'Apache License 2.0', badge: `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`, link: `[License: Apache](https://opensource.org/licenses/Apache-2.0)`},
  {name: 'Mozilla Public License', badge: `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`, link: `[License: MPL 2.0](https://opensource.org/licenses/MPL-2.0)`},
  {name: 'IBM Public License Version 1.0', badge: `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`, link: `[License: IPL 1.0](https://opensource.org/licenses/IPL-1.0)`}
];
var indexValue = 0;

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
  if (!license) {
    return ``;
  }

  for (var i = 0; i < availableLicenses.length; i++) {
    if (availableLicenses[i].name == license)
      indexValue =  i;
  };

  // set the licsense index to a variable

return `
${availableLicenses[indexValue].badge}
`;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

const renderLicenseLink = license => {

return `
${availableLicenses[indexValue].link}
`;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

const renderLicenseSection = license => {
return `
${renderLicenseBadge(license)}
This application is covered under the license below.  Please click the link for more information.
${renderLicenseLink(license)}
`;
};

// TODO: Create a function to generate markdown for README

module.exports = templateData => {
  // destructure page data by section
  const {title, description, installation, usage, license, contributing, questions} = templateData;

//function generateMarkdown(data) {
  return `
# ${templateData.title}
${renderLicenseBadge(license)}
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
${renderLicenseSection(license)}


### Contributing
_____________________________
${templateData.contributing}

### Questions
_____________________________
${templateData.questions}

`;
}

//module.exports = generateMarkdown;
