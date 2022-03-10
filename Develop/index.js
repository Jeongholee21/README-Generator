// TODO: Include packages needed for this application
const fs = require(`fs`);
const inquirer = require(`inquirer`);
const generateMarkdown = require(`./utils/generateMarkdown`);

// TODO: Create an array of questions for user input
const questions = [
    {
        type: `input`,
        message: `What is your Github username?`,
        name: `name`
    },
    {
        type: `input`,
        message: `What is your email address?`,
        name: `email`
    },
    {
        type: `input`,
        message: `What is the title of your project?`,
        name: `title`
    },
    {
        type: `input`,
        message: `Please write a description of your project`,
        name: `description`
    },
    {
        type: `list`,
        message: `What license would you like to add to your project?`,
        name: `license`,
        choices: [
            `MIT`,
            `Apache license`,
            `GPL license`,
            `GNU General Public license 2.0`,
            `No license`
        ]
    },
    {
        type: `input`,
        message: `What command should be run to install dependencies?`,
        name: `installation`
    },
    {
        type: `input`,
        message: `What does the user need to know about using the repo?`,
        name: `usage`
    },
    {
        type: `input`,
        message: `Who would you like to thank/credit for this project?`,
        name: `credits`
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {

        if (err) throw new Error(err);

        console.log(`ReadMeSample.md created!`)
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            const fileName = `ReadMeSample.md`;
            writeToFile(fileName, response);
        });
}

// Function call to initialize app
init();
