const generateContent = valueHere => {
    return `
        ${valueHere}
    `;
};

module.exports = templateData => {
    // destructure page data by section
    const {title, description, installation, usage, license, contributing, questions} = templateData;

    return `
        ###${generateContent(title)}

        ##Description
        ${generateContent(description)}

        ##Table of Contents

        ##Installation
        ${generateContent(installation)}

        ##Usage
        ${generateContent(usage)}

        ##License
        ${generateContent(license)}

        ##Contributing
        ${generateContent(contributing)}

        ##Questions
        ${generateContent(questions)}

    `;
};