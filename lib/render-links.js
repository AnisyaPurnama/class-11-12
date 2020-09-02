const replaceInReadme = require('./replace-in-readme.js');

const repoData = require('./data/index.json');

const links = `
- [Homework Boards](https://github.com/${repoData.userName}/${repoData.repoName}/projects)
- [Class Issues](https://github.com/${repoData.userName}/${repoData.repoName}/issues)
    - [\`help-wanted\`](https://github.com/${repoData.userName}/${repoData.repoName}/issues?q=label%3Ahelp-wanted)
    - [\`review\`](https://github.com/${repoData.userName}/${repoData.repoName}/issues?q=label%3Areview)
    - [\`roll-call\`](https://github.com/${repoData.userName}/${repoData.repoName}/issues?q=label%3Aroll-call)
- [Pull Requests](https://github.com/${repoData.userName}/${repoData.repoName}/pulls)
- [Randomizer](${repoData.domain}/${repoData.repoName}/randomizer)
- [Shared Notes](./shared-notes)
`;

replaceInReadme(links, 'LINKS');
