module.exports = (coach, mainData) => (
  `<table><tr>\n` +
  `  <td><img src='./lib/avatars/coaches/${coach.userName}-avatar.jpeg' alt='${coach.name}' /></td>\n` +
  `  <td> <h3 display="inline">\n` +
  (typeof coach.homePage === 'string'
    ? `      <a href="${coach.homePage}"  target="_blank">${coach.name}</a>`
    : coach.name) +
  `    </h3>\n` +
  `    <ul>\n` +
  `        <li><a href="https://github.com/${coach.userName}"  target="_blank">${coach.userName}</a></li>\n` +
  `        <li><a href="https://github.com/${mainData.userName}/${mainData.repoName}/issues?q=author%3A${coach.userName}"  target="_blank">author</a>, <a href="https://github.com/${mainData.userName}/${mainData.repoName}/issues?q=assignee%3A${coach.userName}"  target="_blank">assignee</a></li>\n` +
  (Array.isArray(coach.modules)
    ? coach.modules.map(modName => `<li><code>${modName}</code></li>`).reduce((mods, mod) => mods + '\n' + mod)
    : '') +
  `    </ul>\n` +
  `  </td>\n` +
  `</tr></table>`
);
