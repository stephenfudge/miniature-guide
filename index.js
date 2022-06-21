// packages needed for this application
require('console.table');
const mysql = require('mysql2');
const {
    prompt
} = require('inquirer');

// creating arrays for departments and roles
const departments = [];
const roles = [];


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


// need 7 functions
//  view all departments, view all roles, view all employeess
// create a department, create a role, create an employee
// update an employee role

// puts existing departments into the departments array
db.query("SELECT name FROM department", function(err,res){
    if (err) throw err;

    res.forEach(department => {
        departments.push(department.name);
    });
});

// puts existing roles into the roles array
db.query("SELECT title FROM role", function(err,res){
    if (err) throw err;
    
    res.forEach(role => {
        roles.push(role.title);
    });
});



// create an array of questions for user input
function questions() {
    // inquirer
    prompt([{
        type: 'list',
        message: 'What would you like to do',
        choices: ["View All Departments", "View All Roles", "View All Employees", "Add A Department", "Add A Role", "Add An Employee", "Update An Employee Role"],
        name: 'viewAll',
    }]).then((data) => {
        if (data.viewAll === 'View All Departments') {
            viewDepartments();
        } else if (data.viewAll === 'View All Roles') {
            viewRoles();
        } else if (data.viewAll === 'View All Employees') {
            viewEmployees();
        } else if (data.viewAll === "Add A Department") {
            addDepartment();
        } else if (data.viewAll === "Add A Role") {
            addRole();
        } else if (data.viewAll === "Add An Employee") {

        } else if (data.viewAll === "Update An Employee Role") {


        } else if (data.viewAll === "Exit") {
            console.log("Exiting")
            db.end();
        }

    })

};

function viewDepartments() {
    db.query('SELECT * FROM department', (err, res) => {
        if (err) {
            throw err
        } else {
            console.table(res)
            questions();
        }
    })
};

function viewRoles() {
    db.query('SELECT * FROM role', (err, res) => {
        if (err) {
            throw err
        } else {
            console.table(res)
            questions();
        }
      
    })
};

function viewEmployees() {
    db.query('SELECT * FROM employee', (err, res) => {
        if (err) {
            throw err
        } else {
            console.table(res)
            questions();
        }
    })
};

function addDepartment() {
    prompt([{
        type: "input",
        message: "What is the name of the department",
        name: "department"
    }]).then(({
        department
    }) => {
        db.query('INSERT INTO department SET ?', {
                name: department
            },
            function (err) {
                if (err) throw err;
                console.log(`The department "${department}" has been added.`);
                departments.push(department);

                questions();
            }
        );
    });
}


function addRole() {
    prompt([{
        type: "input",
        message: "What is the title for this role?",
        name: "title"
    }, {
        type: "number",
        message: "What is the salary for this role?",
        name: "salary"
    }, {
        type: "list",
        message: "What department is this role a part of?",
        choices: departments,
        name: "department"
    }]).then(role => {
        db.query(`SELECT id FROM department WHERE (department.name= "${role.department}")`, function (err, res) {
            if (err) throw err;

            db.query("INSERT INTO role SET ?", {
                    title: role.title,
                    salary: role.salary,
                    department_id: res[0].id
                },
                function (err) {
                    if (err) throw err;
                    console.log(`The role "${role.title}" has been added to the department of "${role.department}" with a salary of "${role.salary}"`);

                    roles.push(role.title);

                    questions();
                });
           
        });
    });
}






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