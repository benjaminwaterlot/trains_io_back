const chalk = require('chalk');

// const [BLUE, RED, GREEN, DIM] = ['blue', 'red', 'green', 'dim'];

const log = (color = BLUE) => message =>
	console.debug(chalk.bold[color](`\n${message}`));

module.exports = log;

module.exports.BLUE = 'blue';
module.exports.RED = 'red';
module.exports.GREEN = 'green';
module.exports.DIM = 'dim';
