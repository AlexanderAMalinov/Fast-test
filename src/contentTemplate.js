const content = {
  importFrom: 'const inquirer = require("inquirer");',
  parseAndLaunch: `
  const parsedForm = [];
  form.reduce((acc, item) => {
    const parsedQuestion = JSON.parse(item);
    acc.push(parsedQuestion);
    return acc;
  }, parsedForm);
  \ninquirer.prompt(parsedForm);
  `,
};

export default content;
