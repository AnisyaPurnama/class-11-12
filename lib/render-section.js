const replaceInReadme = require('./replace-in-readme.js');

const repoData = require('./data/index.json');

const whichOnes = process.argv[2];
const isOrdered = process.argv[3] ? true : false; // list or not
const oLstart = process.argv[4]; // list or not

const renderItem = require(`./views/${whichOnes}.js`);

const sectionData = require(`./data/${whichOnes}.json`);




const section = sectionData
  .map((item) => renderItem(item, repoData))
  .reduce((list, item) => `${list}\n${item}`, `<h2>${whichOnes.replace(/^\w/, c => c.toUpperCase())}</h2><details><summary>expand</summary>${isOrdered ? `<ol start="${oLstart ? oLstart : '1'}">` : ''}\n`)
  + `\n${isOrdered ? '</ol>' : ''}</details >\n\n`
  + `\n[TOP](#${repoData.repoName})`;

replaceInReadme(section, whichOnes.toUpperCase());
