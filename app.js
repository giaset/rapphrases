var request = require('request')
var token = '_o8sX2_Gk7b_cVrE8e-o9gqpLwLoHyVRQFlx_XJLIbGuqZvLTk8pcagb4SbDGqQs'
var base_url = "http://api.genius.com/"

var artist_id = process.argv[2]

GET('artists/'+artist_id+'/songs?sort=popularity&per_page=9999', function(json) {
	for (var i in json.songs) {
		console.log(json.songs[i].id)
	}
})

function GET(path, callback) {
	request(base_url+path, function(error, response, body) {
		callback(JSON.parse(body).response)
	}).auth(null, null, true, token)
}
