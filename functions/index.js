const functions = require('firebase-functions');
const admin = require('firebase-admin');
const Firestore = require('@google-cloud/firestore');

const firestore = new Firestore({
	projectId: 'trains-e1661',
});

const url = require('url');

const main = require('./src/sncf/main');

admin.initializeApp({
	credential: admin.credential.applicationDefault(),
	databaseURL: 'https://trains-e1661.firebaseio.com',
});

exports.getTrains = functions.https.onRequest(async (request, response) => {
	const url_parts = url.parse(request.url, true);
	await firestore.collection('watchers').get();

	// USEFUL
	// const all = await firestore.collection('watchers').get();
	// const log = all.docs.map(doc => {
	// 	console.log(doc);
	// });

	// var propValue;
	// for (var propName in url_parts) {
	// 	propValue = url_parts[propName];

	// 	console.log(propName, propValue);
	// }

	// console.log(url_parts.toString());
	console.log('COUCOU');
	// console.log(JSON.parse(url_parts));
	const query = url_parts.query;
	console.dir(query);
	console.dir(request);

	const result = await main('paris', 'chamb', '06-20');
	response.send(JSON.stringify(result));
});

exports.helloWorld = functions.https.onRequest((request, response) => {
	response.send('Hello from Firebase!');
});
