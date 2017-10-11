'use strict';
const inquirer = require('inquirer');
const programs = [
    {
        name: '1. Console',
        value: './1.console'
    },
    {
        name: '2. Logging Framework (Winston)',
        value: './2.logging-framework'
    },
    {
        name: '3. File Logging',
        value: './3.file'
    },
    {
        name: '4. File & Console Combined',
        value: './4.combined'
    },
    {
        name: '5. DB Logging',
        value: './5.db'
    },
    {
        name: '6. Email Logging',
        value: './6.email'
    },
    {
        name: '7. Elasticsearch',
        value: './7.elasticsearch'
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
