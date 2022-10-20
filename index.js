const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown")

inquirer.prompt([
    {
        type: 'input',
        name: "username",
        message: "What is your GitHub?"
    },
    {
        type: 'input',
        name: "repo",
        message: "What is the name of your GitHub repo?"
    },    {
        type: 'input',
        name: "title",
        message: "What is the title of your project?"
    },    {
        type: 'input',
        name: "description",
        message: "Write a description of your project?"
    },    {
        type: 'list',
        name: "license",
        message: "Which license did you use? (choices all that applies",
        choices: ['MIT', 'something', 'something']

    },
])

.then((data) => {
    fs.writeFile("readMeGenerator.md", JSON.stringify(data, null, `\t`), (error)=>{
        error ? console.log(error) : console.log("success")
    })
})


answer.name