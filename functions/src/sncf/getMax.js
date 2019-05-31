const trainBody = require('./trainBody');
const wishBody = require('./wishBody');
const oui = require('./clientOui');

const log = require('./logger');
const { BLUE, RED, GREEN, DIM } = require('./logger');

module.exports = async travel => {
	const getWishId = await oui
		.post('/proposition/rest/wishes', {
			body: JSON.stringify(wishBody(travel)),
		})
		.catch(err => console.debug(err));

	travel.wishId = JSON.parse(getWishId.body).id;

	log(BLUE)(`STATUS OF THE TRAVEL RESEARCH : ${travel.wishId}`);
	console.debug(travel);

	const proposition = await oui
		.post('/proposition/rest/travels/outward/train', {
			body: JSON.stringify(trainBody(travel)),
		})
		.catch(err => console.debug(err));

	const data = JSON.parse(proposition.body);
	const trains = data.travelProposals;
	const tgvmax = trains.filter(train => train.minPrice === 0);

	return tgvmax;
};
