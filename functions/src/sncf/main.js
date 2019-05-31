const Search = require('./Search');
const getMax = require('./getMax');

const oui = require('./clientOui');
const log = require('./logger');
const { BLUE, RED, GREEN, DIM } = require('./logger');

const argDate = process.argv[2];
if (!argDate) throw new Error(chalk.red('NO PARAM !'));

const travel = new Search(
	'FRPAR',
	'FRCMF',
	`2019-${argDate}T12:00:00`,
	`2019-${argDate}T12:00:00`,
);

const main = async () => {
	const search = await oui.get(
		'https://booking.oui.sncf/booking/autocomplete-d2d?uc=fr-FR&searchField=origin&searchTerm=chamb',
	);

	console.log(search.body);

	const tgvmax = await getMax(travel);

	log(RED)(`NUMBER OF TGVMAX: ${tgvmax.length}`);
	console.debug(tgvmax);
};

main();
