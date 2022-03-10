// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === `MIT`) {
    return `[![MIT license](https://img.shields.io/badge/license-MIT-blue)](https://lbesson.mit-license.org/)`;
  } else if (license === `Apache license`) {
    return `[![APACHE](https://img.shields.io/badge/license-APACHE-blue)](https://www.apache.org/licenses/LICENSE-2.0.txt)`;
  } else if (license === `GPL license`) {
    return `[![GPL](https://img.shields.io/badge/license-GPL-blue)](http://perso.crans.org/besson/LICENSE.html)`;
  } else if (license === `GNU General Public license 2.0`) {
    return `[![GNU](https://img.shields.io/badge/license-GNU-blue)](https://www.gnu.org/licenses/gpl-3.0.md)`;
  } else if (license === `No license`) {
    return ``;
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === `MIT`) {
    return `[MIT License](https://lbesson.mit-license.org/)`;
  } else if (license === `Apache license`) {
    return `[APACHE License](https://www.apache.org/licenses/LICENSE-2.0.txt)`;
  } else if (license === `GPL license`) {
    return `[GPL License](http://perso.crans.org/besson/LICENSE.html)`;
  } else if (license === `GNU General Public license 2.0`) {
    return `[GNU License](https://www.gnu.org/licenses/gpl-3.0.md)`;
  } else if (license === `No license`) {
    return ``;
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
# ${data.title}
${renderLicenseBadge(data.license)}


## Table of Contents
  
- [Description](##Description)
- [Installation](##Installation)
- [Usage](##Usage)
- [Credits](##Credits)
- [License](##License)
- [Contact](##Contact)

## Description
${data.description}


## Installation
${data.installation}


## Usage
${data.usage}


## Credits
${data.credits}


## License
${renderLicenseLink(data.license)}


## Contact
  For any questions contact GitHub user [${data.name}](https://github.com/${data.name}) or at this email: ${data.email}

  `;
}

module.exports = generateMarkdown;
