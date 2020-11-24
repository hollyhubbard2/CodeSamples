const request = require('request');

const options = {
  method: 'POST',
  url: 'https://lastfmdimashirokovv1.p.rapidapi.com/getTopArtistsChart',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'x-rapidapi-key': 'a24e6b8215mshe912a5ba756dcbcp1b6d7cjsnc21289c619e8',
    'x-rapidapi-host': 'LastFmdimashirokovV1.p.rapidapi.com',
    useQueryString: true
  },
  form: {apiKey: 'undefined'}
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);

	console.log(body);
});