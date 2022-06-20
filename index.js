// packages needed for this application
// var inquirer = require('inquirer');
require('console.table');
const mysql = require('mysql2');
const {
    prompt
} = require('inquirer');
const {
    resolveSoa
} = require('dns');

// Connect to database
const db = mysql.createConnection({
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // MySQL password
        password: 'password',
        database: 'employees_db'
    },
    console.log(`Connected to the employees_db database.`)
);


// db.query()

// need 7 functions
//  view all departments, view all roles, view all employeess
// create a department, create a role, create an employee
// update an employee role


// TODO: Create an array of questions for user input
function questions() {
    // inquirer
    prompt([{
        type: 'list',
        message: 'What would you like to do',
        choices: ["View All Departments", "View All Roles", "View All Employees", "Create A Department", "Create A Role", "Create An Employee", "Update An Employee Role"],
        name: 'viewAll',
    }]).then((data) => {
        if (data.viewAll === 'View All Departments') {
            viewDepartments();
        } else if (data.viewAll === 'View All Roles') {
            viewRoles();
        } else {
            (data.viewAll === 'View All Employees')
            viewEmployees();
        }

    })

};

function viewDepartments() {
    db.query('SELECT * FROM department', (err, res) => {
        if (err) {
            throw err
        } else {
            console.table(res)
        }
    })
};

function viewRoles() {
    db.query('SELECT * FROM role', (err, res) => {
        if (err) {
            throw err
        } else {
            console.table(res)
        }
    })
};

function viewEmployees() {
    db.query('SELECT * FROM employee', (err, res) => {
        if (err) {
            throw err
        } else {
            console.table(res)
        }
    })
};


questions();









// {
//     type: 'input',
//     message: 'Enter a project description.',
//     name: 'description',
// }, {
//     type: 'input',
//     message: 'What are the instructions needed to install? Provide a step-by-step description of how to get the environment running.',
//     name: 'installation',
// }, {
//     type: 'input',
//     message: 'Please provide instructions for use.',
//     name: 'usage',
// }, {
//     type: 'list',
//     message: 'Please select the license application',
//     name: "license",
//     choices: ['MIT', 'GPL', 'Apache_2.0', 'None'],
// }, {
//     type: 'input',
//     message: 'Who were the contributing developers, include yourself',
//     name: 'contributing',
// }, {
//     type: 'input',
//     message: 'Provide some tests for your application',
//     default: 'npm run test',
//     name: 'tests',
// }, {
//     type: 'input',
//     message: 'What is your name?',
//     name: 'name',
// }, {
//     type: 'input',
//     message: 'Enter your GitHub Username',
//     name: 'githubUser',
// }, {
//     type: 'input',
//     message: 'What is your email?',
//     name: 'email',
// }];