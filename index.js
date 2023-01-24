//Global variables declaration. 
// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
//This will be a very very large Array of questions and choices to those questions or answers. Ugh. 
const questions = [{
    // PROJECT TITLE
    type: 'input',
    name: 'title',
    message: 'What is your Project Title (No Blanks Can Be Entered:)',

    validate: questionInput => {
        // console.log(questionInput);
        if(questionInput){
            return true;
        }else {
            // console.log('Please enter something in this space');
            return 'Please enter at least one character.';
        }
    } 
},
{
     // PROJECT DESCRIPTION 
    type: 'input',
    name: 'description',
    message: 'What is the description of your project. (No Blanks Can Be Entered:)',

    validate: questionInput => {
        // console.log(questionInput);
        if(questionInput){
            return true;
        }else {
            // console.log('Please enter a description of your project.');
            return 'Please enter at least one character.';
        }
    } 
},
{
    //PROJECT INSTALLATION
    type: 'input',
    name: 'installation',
    message: "How do you install this application and its components?",
    validate: (answer) => {
        if (answer !== '') {
          return true;
        }
        return 'Please enter at least one character.';
      },
},
{
    //PROJECT LIVE SITE
    type: 'confirm',
    name: 'confirmLiveLInk',
    message: 'Would you like to enter enter a link to the live site, if it exists?',
    default: false,
},
{
    type: 'input',
    name: 'liveSiteLink',
    message: 'Provide a full link (include "https://") to the live site.',
    when: ({ confirmLiveLInk }) => confirmLiveLInk,
    validate: liveSiteLink => {
        if (liveSiteLink) {
        return true;
        } else {
        // console.log('You need to enter a link to the live site!');
        return 'Please enter at least one character.';
        }
}
},
{
    //PROJECT USAGE
    type: 'input',
    name: 'provideInstruction',
    message: "How do you Run this application?",
    validate: (answer) => {
        if (answer !== '') {
          return true;
        }
        return 'Please enter at least one character.';
      },
},
{
     // PROJECT CREDITS
    type: 'confirm',
    name: 'confirmCredits',
    message: 'Would you like to list your contributors?',
    default: false,
},
{
    type: 'input',
    name: 'credit',
    message: 'List your collaborators. ',
    when: ({ confirmCredits }) => confirmCredits,
    validate:credit => {
        if (credit) {
        return true;
        } else {
        // console.log('You need to enter a link to the live site!');
        return 'Please enter at least one character.';
        }
}
},
{
    // GITHUB USER NAME
    type: 'confirm',
    name: 'confirmGitHub',
    message: 'Would you like to list your contributors GibHub links?',
    default: false,
},
{
    type: 'input',
    name: 'GitHub',
    message: 'List your contributors GitHub Links (Not included: "https://github.com/")',
    when: ({ confirmGitHub }) => confirmGitHub,
    validate:GitHub => {
        if (GitHub) {
        return true;
        } else {
        // console.log('You need to enter a link to the live site!');
        return 'Please enter at least one character.';
        }
}
},
{
    // PROJECT FEATURES
    type: 'confirm',
    name: 'confirmFeatures',
    message: 'Would you like to list the features of your project here?',
    default: false,

},
{
    type: 'input',
    name: 'features',
    message: 'Write a short list of features here of your applications',
    when: ({ confirmFeatures }) => confirmFeatures,
    validate: features => {
        if (features) {
        return true;
        } else {
        // console.log('You need to enter a link to the live site!');
        return 'Please enter at least one character.';
        }
}
},
{
    // PROJECT CONTRIBUTION INSTRUCTIONS
    type: 'confirm',
    name: 'confirmContribute',
    message: 'Would you like to help the developer(s) and contribute to the project overall?',
},
{
    type: 'input',
    name: 'contributions',
    message: 'Write a short message describing how you would like to help the developer(s)',
    when: ({ confirmContribute }) => confirmContribute,
    validate: contributions => {
        if (contributions) {
        return true;
        } else {
        // console.log('You need to enter a link to the live site!');
        return 'Please enter at least one character.';
        }
}
},
//doing my license next and I know will copy from the list on GitHub and give the user a chance to choose
{
    // LICENSE INFORMATION
    type: 'list',
    name: 'licenseList',
    message: 'Please choose your license for your project',
    choices: [
        'None', 
        'Apache 2.0', 
        'GPL 3.0', 
        'MIT License', 
        '2ClauseSL',
        '3ClauseNL',
        '3ClauseRL',
        'BSL 1.0', 
        'CCZ 1.0', 
        'EPL 2.0', 
        'AGPL 3.0', 
        'GPL 2.0',
        'LGPL 2.1'
    ],
    validate: questionInput => {
        if(questionInput){
            return true;
        }else {
            console.log('Please pick a license!');
            return false;
        }
    } 
},
{
    // PROJECT TESTS
    type: 'confirm',
    name: 'confirmTest',
    message: 'Are tests available for your application?',
},
{
    type: 'input',
    name: 'tests',
    message: 'List how the users can test your application.',
    when: ({ confirmTest }) => confirmTest,
    validate:tests => {
        if (tests) {
        return true;
        } else {
        // console.log('You need to enter a link to the live site!');
        return 'Please enter at least one character.';
        }
}
},
{
    //MISCELLANEOUS
    type: 'input',
    name: 'author',
    message: "What's the authors name?",
    validate: (answer) => {
        if (answer !== '') {
          return true;
        }
        return 'Please enter at least one character.';
      },
},
{
    //MISCELLANEOUS
    type: 'input',
    name: 'username',
    message: "What's your GitHub username?",
    validate: (answer) => {
        if (answer !== '') {
          return true;
        }
        return 'Please enter at least one character.';
      },
},];//This is ending the Array that I started right now on line 16 const questions[]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
        err ? console.log(err) : console.log("README.md Generated. Go to 'newfileloc' to find the README.md file!"
            )
    )
};

// TODO: Create a function to initialize app
function init() {
    console.log(`
    Welcome to the Professional README Generator! 
    Answer the following question to feed information to the README Generator.
    `);
    inquirer.prompt(questions)
    .then(readmeData => {
        console.log(readmeData)
        writeToFile("./dist/readme.md", generateMarkdown(readmeData))
    })
};
// Function call to initialize app
init();