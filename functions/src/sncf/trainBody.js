const { now } = require('./helpers');

module.exports = travel => ({
	context: {},
	wish: {
		id: travel.wishId,
		created: now(),
		mainJourney: {
			origin: {
				code: 'FRPAR',
			},
			destination: {
				code: 'FRCMF',
			},
			via: null,
		},
		asymmetricalJourney: null,
		schedule: {
			outwardType: 'DEPARTURE_FROM',
			inwardType: 'DEPARTURE_FROM',
			outward: travel.start,
			inward: null,
		},
		travelClass: 'SECOND',
		passengers: [
			{
				id: '0',
				typology: 'YOUNG',
				customerId: '100007424346',
				firstname: 'Benjamin',
				lastname: 'Waterlot',
				age: null,
				discountCard: {
					code: 'HAPPY_CARD',
					number: 'HC700001366',
					dateOfBirth: '1993-12-06',
				},
				fidelityCard: { type: '9', number: '29090109386019961' },
				promoCode: '',
				bicycle: null,
				disabilityInformation: null,
				dateOfBirth: '1993-12-06',
			},
		],
		sellerParner: null,
		salesMarket: 'fr-FR',
		channel: 'web',
		pets: [],
		codeFce: null,
		warnings: [],
		context: {
			sumoForTrain: { eligible: true },
			sumoForBus: { eligible: false },
		},
		directTravel: false,
		checkBestPrices: false,
	},
});
