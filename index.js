var express = require('express')
var app = express()
var port = 1234
var bodyParser = require('body-parser')

app.use(bodyParser.json())

app.listen(port, console.log('listening'))

app.get('/home', function (req, res) {
	console.log(req.body)
	res.send('home lkjas;lkfjdals;kfjd;lask')
})

app.post('/post', function(req, res) {
	var jsonobj = req.body
	console.log(jsonobj["rank"])
	res.send('adslfj;adslfj;lasd' + jsonobj["city"])
})



var url = 'https://samples.openweathermap.org/data/2.5/forecast?id=524901&appid=b1b15e88fa797225412429c1c50c122a1'


var request = require('request')



app.get('/logtoconsole', function (req, res) {
	var asdf;
	request(url, function(err, response, body) {
		asdf = JSON.parse(body)["list"][0]
		console.log(asdf)
		res.send(asdf)
	})


})

console.log()

function getWeather( ) {

}
 





