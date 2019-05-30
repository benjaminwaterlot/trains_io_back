const fetch = require('node-fetch');

fetch('https://www.trainline.fr/api/v5_1/search', {
	body:
		'{"search":{"departure_date":"2019-06-06T18:00:00UTC","return_date":null,"cuis":{},"systems":["sncf","db","idtgv","ouigo","trenitalia","ntv","hkx","renfe","cff","benerail","ocebo","westbahn","leoexpress","locomore","busbud","flixbus","distribusion","cityairporttrain","obb","timetable"],"exchangeable_part":null,"source":null,"is_previous_available":false,"is_next_available":false,"departure_station_id":"1339","via_station_id":null,"arrival_station_id":"4916","exchangeable_pnr_id":null,"passenger_ids":["6806966"],"card_ids":["977054","1649967"]}}',
	headers: {
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
	},
	method: 'POST',
})
	.then(res => res.json())
	.then(data => console.log(data))
	.catch(err => console.log(err));
