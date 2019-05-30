const functions = require('firebase-functions');
const admin = require('firebase-admin');

const getTrains = require('./src/getTrains/getTrains');

admin.initializeApp({
	credential: admin.credential.applicationDefault(),
	databaseURL: 'https://trains-e1661.firebaseio.com',
});

exports.getTrains = functions.https.onRequest(async (request, response) => {
	const result = await getTrains();
	console.log(result);

	response.send(result);
});

exports.helloWorld = functions.https.onRequest((request, response) => {
	response.send('Hello from Firebase!');
});
