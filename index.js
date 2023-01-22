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
            console.log('Please enter something in this space');
            return false;
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
            console.log('Please enter a description of your project.');
            return false;
        }
    } 
},
{
     // PROJECT INSTALLATION
    type: 'confirm',
    name: 'confirmInstallation',
    message: 'Confirm if there is an installation process?',
},
{
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project? Please provide a list.',
    //my boolean check for the installation process above. 
    when: ({confirmInstallation})=> {
        if(confirmInstallation) {
            return true;
        } else {
            return false; 
        }
    }
},
{
     // PROJECT USAGE
    type: 'confirm',
    name: 'usage',
    message: 'Would you like to provide instructions and examples how to use your application',
},
{
    type: 'input',
    name: 'provideInstruction',
    message: 'What are the instructions you would like to provide to use your application.',
    //my boolean check for the installation process above. 
    when: ({usage})=> {
        if(usage) {
            return true;
        } else {
            return false; 
        }
    }
},
{
     // PROJECT CREDITS
    type: 'confirm',
    name: 'confirmCredits',
    message: 'Would you like to list your contributors that helped you with this project?',
},
{
    type: 'input',
    name: 'credit',
    message: 'List the people who help to contribute to your project directly or indirectly',
    //my boolean check for the installation process above. 
    when: ({confirmCredits})=> {
        if(confirmCredits) {
            return true;
        } else {
            return false; 
        }
    }
},
{
    // GITHUB USER NAME
    type: 'confirm',
    name: 'confirmGitHub',
    message: 'Would you like to list your contributors GibHub links?',
},
{
    type: 'input',
    name: 'GitHub',
    message: 'List your contributors GitHub Links',
    //my boolean check for the installation process above. 
    when: ({confirmGitHub})=> {
        if(confirmGitHub) {
            return true;
        } else {
            return false; 
        }
    }
},
{
    // PROJECT FEATURES
    type: 'confirm',
    name: 'confirmFeatures',
    message: 'Would you like to list the features of your project here?',
},
{
    type: 'input',
    name: 'features',
    message: 'Write a short list of features here of your applications',
    //my boolean check for the installation process above. 
    when: ({confirmFeatures})=> {
        if(confirmFeatures) {
            return true;
        } else {
            return false; 
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
    //my boolean check for the installation process above. 
    when: ({confirmContribute})=> {
        if(confirmContribute) {
            return true;
        } else {
            return false; 
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
    
    // validate: questionInput => {
    //     if(questionInput){
    //         return true;
    //     }else {
    //         console.log('Please pick a license!');
    //         return false;
    //     }
    // } 
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
    //my boolean check for the installation process above. 
    when: ({confirmTest})=> {
        if(confirmTest) {
            return true;
        } else {
            return 'NOT Available'; 
        }
    } 
}];//This is ending the Array that I started right now on line 16 const questions[]

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
        writeToFile("./newfileloc/readme.md", generateMarkdown(readmeData))
    })
};
// Function call to initialize app
init();