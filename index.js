'use strict';
const inquirer = require('inquirer');
const programs = [
    {
        name: '1. Console',
        value: './1.console'
    },
    {
        name: '2. Logging Framework',
        value: './2.logging-framework'
    },
    {
        name: '3. File Logging',
        value: './3.file-logging'
    }
];
const menu = [
    {
        type: 'list',
        name: 'chooseAProgram',
        message: 'Choose a program to run:',
        choices: programs
    }
];
inquirer.prompt(menu).then(programChosen);

function programChosen(answers) {
    const filePath = answers[menu[0].name];
    require(filePath);
}
