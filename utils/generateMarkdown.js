function generateMarkdown(data) {
    return `# ${data.title}
    ${renderLicenseBadge(data.license)}
    ## Description
    ${data.projectDescription}
    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
    ## Installation
    ${data.installInfo}
    ## Usage
    ${data.usageInfo}
    ${renderLicenseSection(data.license)}
    ## Contributing
    
    ${data.contributionsInfo}
    
    ## Tests
    ${data.testsInfo}
    ## Questions
    My GitHub: [${data.githubUsername}](https://github.com/${data.githubUsername}) <br>
    Email me: ${data.emailInfo}
  `
  }
  
  module.exports = generateMarkdown;