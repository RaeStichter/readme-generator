// array for license information
const availableLicenses = [
  {name: 'MIT License', badge: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`, link: `[License: MIT](https://opensource.org/licenses/MIT)`},
  {name: 'Apache License 2.0', badge: `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`, link: `[License: Apache](https://opensource.org/licenses/Apache-2.0)`},
  {name: 'Mozilla Public License', badge: `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`, link: `[License: MPL 2.0](https://opensource.org/licenses/MPL-2.0)`},
  {name: 'IBM Public License Version 1.0', badge: `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`, link: `[License: IPL 1.0](https://opensource.org/licenses/IPL-1.0)`}
];
var indexValue = 0;

// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
  if (!license) {
    return ``;
  }
  // find index of license and set to indexValue
  for (var i = 0; i < availableLicenses.length; i++) {
    if (availableLicenses[i].name == license)
      indexValue =  i;
  };

return `
${availableLicenses[indexValue].badge}
`;
};

// Function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => {
return `
${availableLicenses[indexValue].link}
`;
};

// Function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => {
return `
${renderLicenseBadge(license)}
This application is covered under the license below.  Please click the link for more information.
${renderLicenseLink(license)}
`;
};

// Function that sets up link for github
const renderQuestionsGithub = github => {
  const githubLink = ('http://github.com/' + github);

  return `
  Please click on the link provided to access the author's [Github](${githubLink}).
  `;
};

// 
const renderQuestionsEmail = email => {
  
  return `
  Further questions can be directed the the author's email address: ${email}.
  `;
};

// ------------------------------------------------------------------------------------------
// Function to generate markdown for README
module.exports = templateData => {
  // destructure page data by section
  const {title, description, installation, usage, license, contributing, github, email} = templateData;

  return `
# ${templateData.title}
${renderLicenseBadge(license)}

### Description
_____________________________
${templateData.description}


### Table of Contents
_____________________________
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)


### Installation
_____________________________
*Steps required to intall and run this program:*

${templateData.installation}


### Usage
_____________________________
*Instructions and example for use: *

![Walk through video.](./assets/video/demo_video.gif)

${templateData.usage}


### License
_____________________________
${templateData.license}
${renderLicenseSection(license)}


### Contributing
_____________________________
${templateData.contributing}


### Tests
_____________________________
${templateData.tests}


### Questions
_____________________________
${renderQuestionsGithub(github)}
${renderQuestionsEmail(email)}
`;
}