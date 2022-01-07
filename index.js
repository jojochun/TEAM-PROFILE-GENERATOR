// required packages
const inquirer = require('inquirer');
const fs = require('fs');
// required module exports
const generatePage = require("./lib/generateHTML");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


// Employee array
let employeesArr = [];

// Questions array for all employees
const promptEmployees = employeeData => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter employee's name:",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('You need to enter a name!');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "Please enter the employee ID:",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('You need to enter an id number!');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Please enter employee's email?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('You need to enter an email address!');
                    return false;
                }
            }
        },
        {
            type: "list",
            name: "role",
            message: "Please select employee's role:",
            choices: ["Engineer", "Intern", "Manager"]
        }
    ])

        // additional questions depending on role choice
        .then(function ({ name, role, id, email }) {
            let roleInfo = "";
            if (role === "Engineer") {
                roleInfo = "GitHub username";
            } else if (role === "Intern") {
                roleInfo = "school name";
            } else {
                roleInfo = "office number";
            }
            inquirer.prompt([{
                type: "input",
                message: `Please enter team member's ${roleInfo}`,
                name: "roleInfo"
            },

            // add more new members
            {
                type: "list",
                message: "Would you like to add more team members?",
                choices: [
                    "yes",
                    "no"
                ],
                name: "moreMembers"
            }])

                .then(function ({ roleInfo, moreMembers }) {
                    let newMember;
                    if (role === "Engineer") {
                        newMember = new Engineer(name, id, email, roleInfo);
                    } else if (role === "Intern") {
                        newMember = new Intern(name, id, email, roleInfo);
                    } else {
                        newMember = new Manager(name, id, email, roleInfo);
                    }
                    employeesArr.push(newMember);
                    if (moreMembers === 'yes') {
                        promptEmployees()


                    }
                    else {
                        writeFile(generatePage(employeeData))
                    }



                });
        });
}

const writeFile = fileContent => {

    fs.writeFileSync('./dist/index.html', fileContent);
};
promptEmployees()




