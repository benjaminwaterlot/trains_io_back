const got = require('got');

const cookies =
	'country_code=FR; x-vsc-correlation-id=d0e4db7d-55f2-4a94-9dac-87f002c3137c; x-vsc-correlation-id=d0e4db7d-55f2-4a94-9dac-87f002c3137c; VSL_city=LIL_PRD4; has_js=1; va_CBL_try=-1; x-vsc-app-version-3000=ACTIVATED; AGGREGSESSION=vslpalp42agr; dydu.context=eyJib3RJRCI6ImMwZGYzMzA0LWU5YmMtNGZhNi1hNDQxLTZhNGUwZjZlNjIyZiIsImxhbmd1YWdlIjoiZnIiLCJsYXN0VXBkYXRlIjoxNTU5MjMxNjY1NDg0LCJjb250YWN0cyI6W10sImlkIjoiIiwib2xkSUQiOiIiLCJoaWRkZW5JRCI6IiIsInNwYWNlIjoiRnJhbmNlIn0%3D; dydu.lastvisitfor=IjIwMTktMDUtMzBUMTU6NTQ6MjUuNzM4WiI%3D; abt_test_vue_apv=true; vscsas=98; VSLPRD4Session=0E0264097FF4B86447110EB2899B28F5; vsct_policy_compliance=1; va_stopTagsCategories=none; va_first_visit=1; AMCVS_F3F4148954F730780A4C98BC%40AdobeOrg=1; s_ecid=MCMID%7C55030964246269749322873207488815022558; AMCV_F3F4148954F730780A4C98BC%40AdobeOrg=2096510701%7CMCIDTS%7C18047%7CMCMID%7C55030964246269749322873207488815022558%7CMCAAMLH-1559848491%7C6%7CMCAAMB-1559848491%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1559250891s%7CNONE%7CMCAID%7CNONE%7CvVersion%7C2.0.0; ck_dir=1; c_m=Typed%2FBookmarkedTyped%2FBookmarkedundefined; ck_chStak=%5B%5B%27Typed%2FBookmarked%27%2C%271559243691408%27%5D%5D; s_cc=true; va_epm=1; _cs_ex=1; _cs_c=1; _fbp=fb.1.1559243691732.1772936096; CCLSESSION=cclancp13; VSCAuth=CCLANCP13-d223a350ebc9387e66498cfdfe00c9096e0e1209; isAuthentified=true; user-askForAutologin=true; userId-firstName=Benjamin; CCLAGGSESSION=cclornp11agg; va_iv=7d3a23b6-9a19-4795-d5cf-974634d42dc4; VSDSESSION=vsltemp42agr; va_prov=devis; va_previousPageName=PropositionAllerNew; x-vsc-correlation-id=d0e4db7d-55f2-4a94-9dac-87f002c3137c; CDPPRDHAPCDP=cdppalp41cdp; cto_lwid=92e1009f-899e-4796-97cb-25d4e5c88483; dydu.common.clientID=eWFNQUl3OURqN3Z4T1RB; dydu.common.contextID=MGQ3Zjc5NGYtY2U4ZC00MzMxLTk3NGYtZDQzZjNhMTVmZDhj; va_s_getNewRepeat=1559243763248-New; dydu.push=eyJyX3BhZ2VzVmlld2VkIjp7ImNvdW50IjozfSwicl9sYXN0cGFnZWxvYWRlZCI6e319; va_clkMerch=MoteurHP; rfrr=HomepageNew_Body1-ExpressBooking_FORM-TrainTypeForm; merchTrck=%23; s_sq=voyagessncfcomprod%3D%2526c.%2526a.%2526activitymap.%2526page%253DHomepageNew%2526link%253DRechercher%2526region%253Dvsb-booking-train%2526pageIDType%253D1%2526.activitymap%2526.a%2526.c%2526pid%253DHomepageNew%2526pidt%253D1%2526oid%253Dfunctionfr%252528%252529%25257B%25257D%2526oidt%253D2%2526ot%253DSUBMIT; RT="r=https%3A%2F%2Fwww.oui.sncf%2F&ul=1559243777492&hd=1559243777548"; ABTasty=uid%3D19053017542169264%26fst%3D1559231662022%26pst%3D1559231662022%26cst%3D1559243685795%26ns%3D2%26pvt%3D7%26pvis%3D6%26th%3D135889.0.14.12.2.1.1559231662054.1559243777886.1_319787.420804.5.4.2.0.1559231662081.1559243758735.1_424774.541939.4.3.2.0.1559231662072.1559243758715.1_431901.549972.6.5.2.1.1559231665789.1559243777898.1_432125.550215.7.6.2.1.1559231662669.1559243777905.1; ABTastySession=sen%3D77__referrer%3D__landingPage%3Dhttps%3A//www.oui.sncf/__referrerSent%3Dtrue';

const headers = {
	accept: '*/*',
	'accept-language': 'fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7,und;q=0.6',
	'content-type': 'application/json',
	'x-vsd-locale': 'fr-FR',
};

(async () => {
	const res = await got
		.post('https://www.oui.sncf/proposition/rest/travels/outward/train', {
			headers: { Cookie: cookies, ...headers },
		})
		.catch(err => console.log(err));
	console.log(res);
})();

// fetch('https://www.oui.sncf/proposition/rest/travels/outward/train', {
// 	credentials: 'include',
// 	headers: {
// 		accept: '*/*',
// 		'accept-language': 'fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7,und;q=0.6',
// 		'content-type': 'application/json',
// 		'x-vsd-locale': 'fr-FR',
// 	},
// 	referrer:
// 		'https://www.oui.sncf/proposition/outward/train?wishId=5cf02c0167587b123a5277aa',
// 	referrerPolicy: 'no-referrer-when-downgrade',
// 	body:
// 		'{"context":{},"wish":{"id":"5cf02c0167587b123a5277aa","created":"2019-05-30T21:16:17","mainJourney":{"origin":{"code":"FRPAR","codes":{"TESS":{"code":"5507"},"OUIBUS":{"code":"PAR"},"RESARAIL":{"code":"FRPAR"},"GEOHASH":{"code":null}},"label":"Paris (toutes gares intramuros)","address":{"code":null,"type":null,"id":null,"label":null,"longitude":0,"latitude":0,"country":"FR"},"longitude":2.35103,"latitude":48.8568,"internationalCode":false,"type":"G"},"destination":{"code":"FRCMF","codes":{"TESS":{"code":null},"OUIBUS":{"code":"XCY"},"RESARAIL":{"code":"FRCMF"},"GEOHASH":{"code":null}},"label":"Chambéry - Challes-les-Eaux (Auvergne-Rhône-Alpes)","address":{"code":null,"type":null,"id":null,"label":null,"longitude":0,"latitude":0,"country":"FR"},"longitude":5.91973,"latitude":45.5711,"internationalCode":false,"type":"G"},"via":null},"asymmetricalJourney":null,"schedule":{"outwardType":"DEPARTURE_FROM","inwardType":"DEPARTURE_FROM","outward":"2019-06-06T06:00:00","inward":null},"travelClass":"SECOND","passengers":[{"id":"0","typology":"YOUNG","customerId":"100007424346","firstname":"Benjamin","lastname":"Waterlot","age":null,"discountCard":{"code":"HAPPY_CARD","number":"HC700001366","dateOfBirth":"1993-12-06"},"fidelityCard":{"type":"9","number":"29090109386019961"},"promoCode":"","bicycle":null,"disabilityInformation":null,"dateOfBirth":"1993-12-06"}],"sellerParner":null,"salesMarket":"fr-FR","channel":"web","pets":[],"codeFce":null,"warnings":[{"field":"wish.passengers[0]","message":"bus.need.young.passenger.age"}],"context":{"sumoForTrain":{"eligible":true},"sumoForBus":{"eligible":false}},"directTravel":false,"checkBestPrices":false}}',
// 	method: 'POST',
// 	mode: 'cors',
// });
