// TODO: Include packages needed for this application
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'Please enter the title of your project',
    name: 'title',
}, {
    type: 'input',
    message: 'Enter a project description.',
    name: 'description',
}, {
    type: 'input',
    message: 'What are the instructions needed to install? Provide a step-by-step description of how to get the environment running.',
    name: 'installation',
}, {
    type: 'input',
    message: 'Please provide instructions for use.',
    name: 'usage',
}, {
    type: 'list',
    message: 'Please select the license application',
    name: "license",
    choices: ['MIT', 'GPL', 'Apache_2.0', 'None'],
}, {
    type: 'input',
    message: 'Who were the contributing developers, include yourself',
    name: 'contributing',
}, {
    type: 'input',
    message: 'Provide some tests for your application',
    default: 'npm run test',
    name: 'tests',
}, {
    type: 'input',
    message: 'What is your name?',
    name: 'name',
}, {
    type: 'input',
    message: 'Enter your GitHub Username',
    name: 'githubUser',
}, {
    type: 'input',
    message: 'What is your email?',
    name: 'email',
}];


// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('./utils/README.md', generatorMarkdown(data), (err) =>
        err ? console.log(err) : console.log('Success!')
    );
    return data;
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            writeToFile(data);
        });
}

// Function call to initialize app
init();