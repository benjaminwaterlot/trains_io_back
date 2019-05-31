const got = require('got');

const baseUrl = 'https://www.oui.sncf';

const baseHeaders = {
	accept: '*/*',
	'accept-language': 'fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7,und;q=0.6',
	'cache-control': 'no-cache',
	'content-type': 'application/json',
	pragma: 'no-cache',
	'x-vsd-locale': 'fr-FR',
};

module.exports = got.extend({ baseUrl, headers: baseHeaders });
