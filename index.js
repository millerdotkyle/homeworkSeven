const fs = require('fs');
const inquirer = require('inquirer');
const readmegen = require('./util/readmegen');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your project title',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What is the project description?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'How does one install this project?',
      name: 'install',
    },
    {
      type: 'input',
      message: 'How does one use this project?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'How does one contribute to this project?',
      name: 'contribute',
    },
    {
      type: 'input',
      message: 'How does one test this project?',
      name: 'testing',
    },
    {
      type: 'list',
      message: 'What license is this project under?',
      name: 'license',
      choices: ['MIT', 'LGPL', 'Proprietary ', 'Open']
    },
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'What is your email?',
      name: 'email',
    }
  ])
  .then((response) => {
       fs.writeFile('./output/README.md', readmegen(response), (err) => 
       err ? console.error(err) : console.log('Commit logged!') )
  });
  
