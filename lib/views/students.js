module.exports = (student, mainData) => (
  `<table> <tr>\n` +
  `  <td><img src='./lib/avatars/students/${student.userName}-avatar.jpeg' alt='${student.userName} github photo' /></td>\n` +
  `  <td> <h3 display="inline"><a href="https://${student.userName}.github.io" target="_blank">${student.name}</a></h3>\n` +
  `    <ul>\n` +
  `        <li><a href="https://github.com/${student.userName}"  target="_blank">${student.userName}</a></li>\n` +
  `        <li><code><a href="https://github.com/${mainData.userName}/${mainData.repoName}/issues?q=author%3A${student.userName}"  target="_blank">author</a></code></li>\n` +
  `        <li><code><a href="https://github.com/${mainData.userName}/${mainData.repoName}/issues?q=assignee%3A${student.userName}"  target="_blank">assignee</a></code></li>\n` +
  `    </ul>\n` +
  `  </td>\n` +
  `</tr></table> `
);
