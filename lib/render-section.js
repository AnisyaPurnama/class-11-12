const replaceInReadme = require('./replace-in-readme.js');

const repoData = require('./data/index.json');

const whichOnes = process.argv[2] || ''; // string indicating which view & data to use (ie. coaches, students)
if (whichOnes === '') {
  process.exit(9);
};

const isOpen = process.argv[3] === 'yes'; // render the details open
const isOrdered = process.argv[4] === 'yes'; // render an ordered list?
const oLstart = process.argv[5] || '1'; // start the list with (for precourse being 0s)

const renderItem = require(`./views/${whichOnes}.js`);
const sectionData = require(`./data/${whichOnes}.json`);


const section = sectionData
  .map((item) => renderItem(item, repoData))
  .reduce((list, item) => `${list}\n<li>${item}</li>`, `<h2>${whichOnes.replace(/^\w/, c => c.toUpperCase())}</h2><details ${isOpen ? 'open' : ''}><summary>expand</summary>${isOrdered ? `<ol start="${oLstart ? oLstart : '1'}">` : '<ul  style="list-style-type:none;">'}\n`)
  + `\n${isOrdered ? '</ol>' : '</ul>'}</details>\n\n`
  + `\n[TOP](#${repoData.repoName})`;

replaceInReadme(section, whichOnes.toUpperCase());
