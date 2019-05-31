const functions = require('firebase-functions');
const admin = require('firebase-admin');
const url = require('url');

const main = require('./src/sncf/main');

admin.initializeApp({
	credential: admin.credential.applicationDefault(),
	databaseURL: 'https://trains-e1661.firebaseio.com',
});

exports.getTrains = functions.https.onRequest(async (request, response) => {
	// const url_parts = url.parse(request.url, true);
	// const query = url_parts.query;
	// console.log(query);

	const result = await main('paris', 'chambe', '06-20');
	response.send(JSON.stringify(result));
});

exports.helloWorld = functions.https.onRequest((request, response) => {
	response.send('Hello from Firebase!');
});
