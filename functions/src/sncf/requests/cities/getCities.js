const got = require('got');

// const cityClient = got.extend({ baseUrl: 'https://booking.oui.sncf/booking' });

module.exports = async input => {
	const searchParams = new URLSearchParams([
		['uc', 'fr-FR'],
		['searchField', 'origin'],
		['searchTerm', input],
	]);

	const { body } = await got(
		`https://booking.oui.sncf/booking/autocomplete-d2d?${searchParams.toString()}`,
	).catch(err => {
		throw new Error(err);
	});

	const parsed = JSON.parse(body);

	if (!parsed || parsed.length < 1)
		throw new Error(`ERROR WHEN PARSING THIS CITY >${input}<`);

	const results = parsed[0].id;
	return results;
};
