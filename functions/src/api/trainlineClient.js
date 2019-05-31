const got = require('got');
const tough, { CookieJar, Cookie } = require('tough-cookie');

const newCookie = new Cookie()

const cookieJar = new CookieJar();

// cookieJar.setCookie(
// 	'ak_bmsc=8FA6CD9B0D08A0A457AC6FB49026EE3102112B7FF22D0000172AF05C8A30AE12~plVSKXHKAddZma54iUEOF6xb1oUKIe/ytKWDu5pMhImk2RvtjeQUPM4q24gI1yYTE28gXIHDXjAAzoDWZy6CMnvSCob8GnvOsa/f4W1RBZy3AheZPe2Z7gPQcX2SScWUnsmyXrbPKaGsobkr4ugAbUnkicOZQ8ZfAbEfWRFiwigCVsSMLCENVr3gRkgdAhewpdRNB95toylV0xYlIIopbZziXkNJ4re0G+ijqO5euiREQ=',
// 	'trainline.fr',
// 	() => {},
// );

const client = got.extend({
	baseUrl: 'https://www.trainline.fr/api/v5_1',
	cookieJar,
});

// client.cookieJar = cookieJar;

module.exports = client;
