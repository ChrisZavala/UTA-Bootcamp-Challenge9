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
    message: 'List your installation steps here:?',
    //my boolean check for the installation process above. 
    when: ({installation})=> {
        if(installation) {
            return true;
        } else {
            return false; 
        }
    }
},
    


    















];//This is ending the Array that I started right now on line 16 const questions[]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}