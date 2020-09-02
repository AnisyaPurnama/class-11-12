const fs = require('fs');
const replaceInReadme = require('./replace-in-readme.js');

const repoData = require('./data/index.json');

const header = `# ${repoData.repoName}`;

replaceInReadme(header, 'HEADER');
