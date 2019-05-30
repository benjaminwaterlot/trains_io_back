// import client from '../api/trainlineClient';
const client = require('../api/trainlineClient');

// fetch('https://www.trainline.fr/', {
// 	credentials: 'omit',
// 	headers: {
// 		accept:
// 			'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
// 		'accept-language': 'fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7,und;q=0.6',
// 		'cache-control': 'max-age=0',
// 		'upgrade-insecure-requests': '1',
// 	},
// 	referrerPolicy: 'no-referrer-when-downgrade',
// 	body: null,
// 	method: 'GET',
// 	mode: 'cors',
// });

const headers = {
	Accept: 'application/json, text/javascript, */*; q=0.01',
	Authorization: 'Token token="x_SWv44gNKKrfCGrpnGH"',
	'Cache-Control': 'no-cache',
	'Content-Type': 'application/json; charset=UTF-8',
	Cookie:
		'ak_bmsc=8FA6CD9B0D08A0A457AC6FB49026EE3102112B7FF22D0000172AF05C8A30AE12~plVSKXHKAddZma54iUEOF6xb1oUKIe/ytKWDu5pMhImk2RvtjeQUPM4q24gI1yYTE28gXIHDXjAAzoDWZy6CMnvSCob8GnvOsa/f4W1RBZy3AheZPe2Z7gPQcX2SScWUnsmyXrbPKaGsobkr4ugAbUnkicOZQ8ZfAbEfWRFiwigCVsSMLCENVr3gRkgdAhewpdRNB95toylV0xYlIIopbZziXkNJ4re0G+ijqO5euiREQ=',
	'X-Ct-Client-Id': '21c74d7c-f476-4501-8524-e17bd1108efb',
	'X-Ct-Locale': 'fr',
	'X-Ct-Timestamp': '1559133583',
	'X-Ct-Version': 'a4d28f2f386bda33d2bc8006572844ca3b545b7b',
	'X-Not-A-Bot': 'i-am-human',
	'X-Requested-With': 'XMLHttpRequest',
	'X-User-Agent': 'CaptainTrain/1559133583(web) (Ember 3.5.1)',
};

// const headers = {
// 	'X-CT-Client-Id': '21c74d7c-f476-4501-8524-e17bd1108efb',
// 	'X-User-Agent': 'CaptainTrain/1559133583(web) (Ember 3.5.1)',
// 	Origin: 'https://www.trainline.fr',
// 	'X-Requested-With': 'XMLHttpRequest',
// 	'X-CT-Timestamp': '1559133583',
// 	Authorization: 'Token token="x_SWv44gNKKrfCGrpnGH"',
// 	'Content-Type': 'application/json; charset=UTF-8',
// 	Accept: 'application/json, text/javascript, */*; q=0.01',
// 	'x-not-a-bot': 'i-am-human',
// 	'X-CT-Locale': 'fr',
// 	'User-Agent':
// 		'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36',
// 	'X-CT-Version': 'a4d28f2f386bda33d2bc8006572844ca3b545b7b',
// 	'cache-control': 'no-cache',
// };

const body = JSON.stringify({
	search: {
		departure_date: '2019-06-06T18:00:00UTC',
		return_date: null,
		cuis: {},
		systems: [
			'sncf',
			'db',
			'idtgv',
			'ouigo',
			'trenitalia',
			'ntv',
			'hkx',
			'renfe',
			'cff',
			'benerail',
			'ocebo',
			'westbahn',
			'leoexpress',
			'locomore',
			'busbud',
			'flixbus',
			'distribusion',
			'cityairporttrain',
			'obb',
			'timetable',
		],
		exchangeable_part: null,
		source: null,
		is_previous_available: false,
		is_next_available: false,
		departure_station_id: '1339',
		via_station_id: null,
		arrival_station_id: '4916',
		exchangeable_pnr_id: null,
		passenger_ids: ['6806966'],
		card_ids: ['977054', '1649967'],
	},
});

module.exports = async () => {
	const result = await client.get('/', {
		baseUrl: 'https://www.trainline.fr',
		headers: {
			accept:
				'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
			'accept-language': 'fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7,und;q=0.6',
			'cache-control': 'max-age=0',
			'upgrade-insecure-requests': '1',
			Host: 'www.trainline.fr',
		},
	});
	// console.log('RESULT', JSON.stringify(result.headers, null, 2));
	// console.log(JSON.stringify(client.cookieJar, null, 2));

	const endresult = await client.post('search', {
		body,
		headers,
	});

	console.log(endresult);
	return endresult;
};
