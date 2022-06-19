let express = require('express');
require('dotenv').config();
let app = express();

// Solution 8
app.get('/now', function(req, res, next) {
	req.time = new Date().toString();	
	next();
}, function(req, res) { res.json({time: req.time})});

// Solution 7
app.use('/', function(req, res, next) {
	console.log(req.method + " " + req.path + " - " + req.ip);
	next();
});

// Solution 6
app.get('/json', function(req, res) {
	if ( process.env.MESSAGE_STYLE === "uppercase" ) {
		res.json({ message: "HELLO JSON" });
	} else {
		res.json({ message: "Hello json" });
	}
});

/* Solution 5
app.get('/json', function(req, res) {
	res.json({ message: "Hello json" });
}); */

// Solution 4
publicPath = __dirname + "/public";
app.use('/public', express.static(publicPath));


// Solution 3
indexPath = __dirname + "/views/index.html";
app.get('/', function(req, res) { res.sendFile(indexPath); });

/* Solution 2
app.get("/", function(req, res) {
  res.send('Hello Express');
});

/* Solution 1
console.log("Hello World");				
*/

module.exports = app;

