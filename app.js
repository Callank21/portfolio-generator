/* const profileDataArgs = process.argv.slice(2, process.argv.length);

const printProfileData = profileDataArr => {
    for (let i = 0; i < profileDataArr.length; i += 1) {
        console.log(profileDataArr[i]);
    }

    console.log('===========');

    profileDataArr.forEach((profileItem) => {
        console.log(profileItem);
    });
};

printProfileData(profileDataArgs); */

/*const generatePage = (userName, githubName) => {
    return `
    Name: ${userName}
    Github: ${githubName}
    `;
};

console.log(generatePage('Callan', 'Callank21')); */
const fs = require('fs');
const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);

const [username, github] = profileDataArgs;

fs.writeFile('./index.html', generatePage(username, github), err => {
  if (err) throw err;

  console.log('Portfolio complete! Check out index.html to see the output!')
});
