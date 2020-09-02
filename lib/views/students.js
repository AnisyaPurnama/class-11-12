module.exports = (student, mainData) => (
  `<table> <tr>\n` +
  `  <td><img src='./lib/avatars/students/${student.userName}-avatar.jpeg' alt='${student.name}' /></td>\n` +
  `  <td> <h3 display="inline"><a href="https://${student.userName}.github.io">${student.name}</a></h3>\n` +
  `    <ul>\n` +
  `        <li><code><a href="https://github.com/${student.userName}">${student.userName}</a></code></li>\n` +
  `        <li><a href="https://github.com/${mainData.userName}/${mainData.repoName}/issues?q=author%3A${student.userName}">author</a></li>\n` +
  `        <li><a href="https://github.com/${mainData.userName}/${mainData.repoName}/issues?q=assignee%3A${student.userName}">assignee</a></li>\n` +
  `    </ul>\n` +
  `  </td>\n` +
  `</tr></table> `
);
