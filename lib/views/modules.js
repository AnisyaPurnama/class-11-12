module.exports = (module, mainData) => (
  `<li><h3><a href="${mainData.domain}/${module.name}" target="_blank">${module.name}</a></h3>\n` +
  `  <ul><li><p>` +
  `    ${module.weeks === 1 ? '1 week' : module.weeks + ' weeks'}` +
  `    | <a href="https://github.com/${mainData.userName}/${mainData.repoName}/projects/${module.project}" target="_blank">project board</a> ` +
  `    | <a href="https://github.com/${mainData.userName}/${mainData.repoName}/issues?q=milestone%3A${module.name}+label%3Aindividual" target="_blank"><code>individual</code></a> ` +
  `    | <a href="https://github.com/${mainData.userName}/${mainData.repoName}/milestone/${module.milestone}" target="_blank">all issues</a> ` +
  `    | <a href="${mainData.domain}/${module.name}#class-recordings" target="_blank">class recordings</a> ` +
  `  </p></li></ul>` +
  `</li>\n`
);
