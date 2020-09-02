module.exports = (module, mainData) => (
  `1. ### [${module.name}](${mainData.domain}/${module.name})  \n` +
  `    - \`${module.weeks === 1 ? '1 week' : module.weeks + ' weeks'}\`` +
  `| _[project board](https://github.com/${mainData.userName}/${mainData.repoName}/projects/${module.project})_ ` +
  `| _[\`individual\`](https://github.com/${mainData.userName}/${mainData.repoName}/issues?q=milestone%3A${module.name}+label%3Aindividual)_ ` +
  `| _[all issues](https://github.com/${mainData.userName}/${mainData.repoName}/milestone/${module.milestone})_ ` +
  `| _[recordings](${mainData.domain}/${module.name}#class-recordings)_` +
  `\n`
);
