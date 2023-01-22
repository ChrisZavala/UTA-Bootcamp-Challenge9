// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badgeLabel = license.replace(" ", "&ensp;");
  return `
  [![Generic badge](https://img.shields.io/badge/License-${badgeLabel}-purple.svg)](${renderLicenseLink(license)})
  `
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let linkUrl = license.toLowerCase().replace(" ", "-");
  return `https://choosealicense.com/licenses/${linkUrl}/.`
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (license === "None") {
    return "";
  } else {
    return `
  ### Licensing 
  ${license}
  ${renderLicenseBadge(license)}
  `
}
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let {licenseList, GitHub, ...info } = data;
  return `
  # ${data.title}

  ## Description 
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## Installation 
  ${data.installation}

  ## Usage
  ${data.provideInstruction}

  ## Credits
  ${data.credit}
  List of GitHub contributors, [${GitHub}](https://gitbut.com/${GitHub})

  ${renderLicenseSection(licenseList)}

  ## Features
  ${data.features}

  ## How to Contribute
  ${data.contributions}

  ## Test
  ${data.tests}
`;
}
//exports the file for use. 
module.exports = generateMarkdown;