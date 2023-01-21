//Global variables declaration. 
// TODO: Include packages needed for this application
//Going to need a file structure 

const fs = require('fs');
// Going to need inquirer function
const inquirer = require('inquirer');
//Going to need the generateMarkdown.js
const generateMarkdown = require('./utils/generateMarkdown');
//Going to need a declaration for the Utilities folder 
const util = require('util');


// TODO: Create an array of questions for user input
//This will be a very very large Array of questions and choices to those questions or answers. Ugh. 
const questions = [{
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
    type: 'confirm',
    name: 'confirmInstallation',
    message: 'Confirm if there is an installation process?',
},
{
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project? Please provide a list.',
    //my boolean check for the installation process above. 
    when: ({installation})=> {
        if(installation) {
            return true;
        } else {
            return false; 
        }
    }
},
{
    type: 'confirm',
    name: 'usage',
    message: 'Would you like to provide instructions and examples how to use your application',
},
{
    type: 'input',
    name: 'provideInstruction',
    message: 'What are the instructions you would like to provide to use your application.',
    //my boolean check for the installation process above. 
    when: ({provideInstruction})=> {
        if(provideInstruction) {
            return true;
        } else {
            return false; 
        }
    }
},
{
    type: 'confirm',
    name: 'confirmCredits',
    message: 'Would you like to list your contributors that helped you with this project?',
},
{
    type: 'input',
    name: 'credit',
    message: 'List the people who help to contribute to your project directly or indirectly',
    //my boolean check for the installation process above. 
    when: ({credit})=> {
        if(credit) {
            return true;
        } else {
            return false; 
        }
    }
},
//doing my license next and I know will copy from the list on GitHub and give the user a chance to choose
{
    type: 'checkbox',
    name: 'license',
    message: 'Please choose your license for your project',
    choices: ['None', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License',
              'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal,', 
              'Eclipse Public License 2.0', 'GNU Affero General PUblic License v3.0', 'GNU General Public License v2.0',
              'GNU Lesser General Public License v2.1'],
    

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
{
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
            return false; 
        }
    } 
}];//This is ending the Array that I started right now on line 16 const questions[]

// TODO: Create a function to write README file
// function writeToFile(fileName, data);

// TODO: Create a function to initialize app
// init();