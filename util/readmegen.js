//function returns HTML skeleton with values inserted
function readmegen(answers) {
    return `
    <h1>***${answers.title}***</h1>

    <img src="https://img.shields.io/badge/license-${answers.license}-yellow"></img>
    
    <h3 id="description">## Description</h3>
    <p>${answers.description}</p>
    
    <nav>
    <h3>## Table of Contents</h3>   
    <a href="#description">Description</a> <br>
    <a href="#install">Installation</a> <br>
    <a href="#usage">Usage</a> <br>
    <a href="#license">License</a> <br>
    <a href="#contribute">Contributing</a> <br>
    <a href="#tests">Tests</a> <br>
    <a href="#questions">Questions</a> <br>
    </nav>
    
    <h3 id="install">## Installation</h3>
    <p>${answers.install}</p>
    
    <h3 id="usage">## Usage</h3>
    <p>${answers.usage}</p>
    
    <h3 id="license">## License</h3>
    <p>This application is distributed with the ${answers.license} license. </p>
    
    <h3 id="contribute">## Contributing</h3>    
    <p>${answers.contribute}</p>    
    
    <h3 id="tests">## Tests</h3>
    <p>${answers.testing}</p>
    
    <h3 id="questions">## Questions</h3>
    <p>Reach out with any questions at <a href="mailto:${answers.email}">${answers.email}</a></p>
    
    <h3>GitHub: <a href="https://github.com/${answers.username}">[${answers.username}]</a></h3>
        `;
  }
  
  module.exports = readmegen;