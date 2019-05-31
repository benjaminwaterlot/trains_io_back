// const client = require('./api/trainlineClient');
const got = require('got');
const { CookieJar, Cookie } = require('tough-cookie');
const chalk = require('chalk');
const fs = require('fs');
const fetch = require('node-fetch');

// const cookieJar = new CookieJar();

// const newCookie = new Cookie({
// 	key: 'ak_bmsc',
// 	value:
// 		'420C9142050635A6DB0434039D080EEB02112B7FF22D0000CCE4F05C7C3AD032~plKeoehufMpnukOOZZqup3Xh56Q1qmBHAeh7ZQBFIvvq8eT6Ragwr7snQTxkSWXlZ/g1I/w3Wo1AgnY3bL1gwM0rE/tBLXMN40OiXpP+5YSr+dst8TyxMiylfPFhFzH3/AVXw0TIXUb9oN7Rsui9zrd9LBkd3VX1ykaGkCynFBL2cNgUU5WDrCEhV7Do8rCwg4CDGzCSc6QM7BpnE95Yl6d0JLBVYIWFrt7Q++k5xyPks=',
// });

// cookieJar.setCookie(newCookie, 'https://www.trainline.fr/api/v5_1');

// const client = got.extend({
// 	baseUrl: 'https://www.trainline.fr/api/v5_1',
// 	// cookieJar,
// });

const CURRENT_COOKIE =
	'ak_bmsc=420C9142050635A6DB0434039D080EEB02112B7FF22D0000CCE4F05C7C3AD032~plKeoehufMpnukOOZZqup3Xh56Q1qmBHAeh7ZQBFIvvq8eT6Ragwr7snQTxkSWXlZ/g1I/w3Wo1AgnY3bL1gwM0rE/tBLXMN40OiXpP+5YSr+dst8TyxMiylfPFhFzH3/AVXw0TIXUb9oN7Rsui9zrd9LBkd3VX1ykaGkCynFBL2cNgUU5WDrCEhV7Do8rCwg4CDGzCSc6QM7BpnE95Yl6d0JLBVYIWFrt7Q++k5xyPks=';

const headers = {
	Accept: 'application/json, text/javascript, */*; q=0.01',
	Authorization: 'Token token="x_SWv44gNKKrfCGrpnGH"',
	'Cache-Control': 'no-cache',
	'Content-Type': 'application/json; charset=UTF-8',
	// Cookie: CURRENT_COOKIE,
	'X-Ct-Client-Id': '21c74d7c-f476-4501-8524-e17bd1108efb',
	'X-Ct-Locale': 'fr',
	'X-Ct-Timestamp': '1559133583',
	'X-Ct-Version': 'a4d28f2f386bda33d2bc8006572844ca3b545b7b',
	'X-Not-A-Bot': 'i-am-human',
	'X-Requested-With': 'XMLHttpRequest',
	'X-User-Agent': 'CaptainTrain/1559133583(web) (Ember 3.5.1)',
};

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

const classic = async () => {
	console.debug(chalk.blue('CHECKING FIRST GET...'));

	const cookieJar = new CookieJar();

	// const newCookie = new Cookie({
	// 	key: 'ak_bmsc',
	// 	value:
	// 		'420C9142050635A6DB0434039D080EEB02112B7FF22D0000CCE4F05C7C3AD032~plKeoehufMpnukOOZZqup3Xh56Q1qmBHAeh7ZQBFIvvq8eT6Ragwr7snQTxkSWXlZ/g1I/w3Wo1AgnY3bL1gwM0rE/tBLXMN40OiXpP+5YSr+dst8TyxMiylfPFhFzH3/AVXw0TIXUb9oN7Rsui9zrd9LBkd3VX1ykaGkCynFBL2cNgUU5WDrCEhV7Do8rCwg4CDGzCSc6QM7BpnE95Yl6d0JLBVYIWFrt7Q++k5xyPks=',
	// });

	// await cookieJar.setCookie(
	// 	newCookie,
	// 	'https://www.trainline.fr/api/v5_1',
	// 	() => {
	// 		console.debug(chalk.dim('\n\nCOOKIE SET IN COOKIE JAR\n'));
	// 	},
	// );

	const client = got.extend({
		baseUrl: 'https://www.trainline.fr/api/v5_1',
		cookieJar,
	});
	console.debug(chalk.dim('\n\nCOOKIE JAR REGISTERED IN CLIENT\n'));

	const simpleRequest = await client.get('/', {
		baseUrl: 'https://www.trainline.fr',
		// credentials: 'omit',
		credentials: 'same-origin',
		// referrerPolicy: 'no-referrer-when-downgrade',
		// mode: 'cors',
		headers: {
			accept:
				'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
			'accept-language': 'fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7,und;q=0.6',
			'cache-control': 'max-age=0',
			'upgrade-insecure-requests': '1',
			cookie: CURRENT_COOKIE,
		},
	});

	console.debug(chalk.bold.blue('\n\nSIMPLE GET RESPONSE HEADERS\n'));
	console.debug(simpleRequest.headers);

	console.debug(chalk.bold.blue('\n\nCOOKIE JAR NEW COOKIES\n'));
	console.log(cookieJar);
	await cookieJar.getCookies('trainline.fr', {}, cb => {
		console.debug(cb);
	});

	const searchRequest = await client
		.post('search', {
			body,
			headers,
		})
		.catch(error => {
			console.debug(error);
			exit(0);
		});

	console.debug(chalk.bold.blue('\n\nRESPONSE BODY (first folder only)\n'));
	console.debug(searchRequest.body);
	console.debug(chalk.bold.blue('\n\nRESPONSE HEADERS\n'));
	console.debug(searchRequest.headers);
};
// classic()
