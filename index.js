const inquirer = require('inquirer');
const programs = [
    {
        name: '1. Console',
        value: './1.console'
    },
    {
        name: '2. todo',
        value: './2.todo'
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
