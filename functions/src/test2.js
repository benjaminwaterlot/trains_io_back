var request = require('request');

var options = {
	method: 'POST',
	url: 'https://www.trainline.fr/api/v5_1/search',
	headers: {
		'Postman-Token': 'fbe892da-8ef5-4117-b426-e26c0eb66878',
		'cache-control': 'no-cache',
		'X-CT-Version': 'a4d28f2f386bda33d2bc8006572844ca3b545b7b',
		'User-Agent':
			'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36',
		'X-CT-Locale': 'fr',
		'x-not-a-bot': 'i-am-human',
		Accept: 'application/json, text/javascript, */*; q=0.01',
		'Content-Type': 'application/json; charset=UTF-8',
		Authorization: 'Token token="x_SWv44gNKKrfCGrpnGH"',
		'X-CT-Timestamp': '1559133583',
		'X-Requested-With': 'XMLHttpRequest',
		Origin: 'https://www.trainline.fr',
		'X-User-Agent': 'CaptainTrain/1559133583(web) (Ember 3.5.1)',
		'X-CT-Client-Id': '21c74d7c-f476-4501-8524-e17bd1108efb',
	},
	body:
		'{"search":{"departure_date":"2019-06-06T18:00:00UTC","return_date":null,"cuis":{},"systems":["sncf","db","idtgv","ouigo","trenitalia","ntv","hkx","renfe","cff","benerail","ocebo","westbahn","leoexpress","locomore","busbud","flixbus","distribusion","cityairporttrain","obb","timetable"],"exchangeable_part":null,"source":null,"is_previous_available":false,"is_next_available":false,"departure_station_id":"1339","via_station_id":null,"arrival_station_id":"4916","exchangeable_pnr_id":null,"passenger_ids":["6806966"],"card_ids":["977054","1649967"]}}',
};

request(options, function(error, response, body) {
	if (error) throw new Error(error);

	console.log(body);
});
