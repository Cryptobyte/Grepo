const chalk = require('chalk');

/*
 * Simple logging class that colorizes 
 * output for us automatically to keep 
 * things consistent and the codebase 
 * concise.
 * 
 * @name Logger
 */
module.exports = {
  log: (message, category) => {
    var msg = '';
    
    switch(category) {
      case 'Success':
        msg = chalk.green(message);
        break;
      case 'Error':
        msg = chalk.red(message);
        break;
      default:
        msg = chalk.white(message);
        break;
    }
    console.log(`${chalk.blue('[')}${category}${chalk.blue(']')}: ${msg}`);
  }
};