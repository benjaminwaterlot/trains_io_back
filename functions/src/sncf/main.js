const chalk = require('chalk');

const Search = require('./Search');
const getTrains = require('./requests/search/getTrains');
const getCities = require('./requests/cities/getCities');

const oui = require('./clientOui');
const log = require('./logger');
const { BLUE, RED, GREEN, DIM } = require('./logger');

// const argFrom = process.argv[2];
// const argTo = process.argv[3];

// const argStart = process.argv[4];
// if (!argStart || !argFrom || !argTo) throw new Error(chalk.red('NO PARAM !'));

module.exports = async (argFrom, argTo, argStart) => {
	const from = await getCities(argFrom).catch(err => {
		throw new Error(err);
	});

	const to = await getCities(argTo).catch(err => {
		throw new Error(err);
	});

	const travel = new Search(
		from,
		to,
		`2019-${argStart}T12:00:00`,
		`2019-${argStart}T12:00:00`,
	);

	log(BLUE)(`SEARCHING FOR ${from} to ${to} at ${argStart}`);

	console.log('DATE: ');
	console.log(new Date(travel.start));
	const tgvmax = await getTrains(travel);

	log(RED)(`NUMBER OF TGVMAX: ${tgvmax.length}`);
	console.debug(tgvmax);
	return tgvmax;
};

// main(argFrom, argTo, argStart).catch(err => console.log(err));
