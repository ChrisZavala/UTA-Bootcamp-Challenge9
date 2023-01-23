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
  ### License 
  ${license}
  ${renderLicenseBadge(license)}
  `
}
};
//Making the insertion of the Live GitHub pages site link. 
function insertGitHubPagesSite(siteLink) {
  if(!siteLink) {
    return"";
  }else{
    return `
    [Link to the Live Github Pages Site:](${siteLink})
    `
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let {licenseList, GitHub, LiveSite, ...info } = data;
  return `
  # ${data.title}

  ## Description 
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Features](#features)
  - [How To Contribute](#howtocontribute)
  - [Test](#test)

  ## Installation 
  ${data.installation}

  ## Usage
  ${data.provideInstruction}
  ${insertGitHubPagesSite(LiveSite)}

  ## Credits
  List your collaborators:
  ${data.credit}: https://github.com/${GitHub}

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