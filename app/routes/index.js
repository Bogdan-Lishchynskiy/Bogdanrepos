var express = require('express' );
var router = express.Router();
 
 
 router.get('/', function(req, res) {
  res.send(`
  	<h1>Іван Котляревський</h1>
  	<h2>Поема</h2>
  	`);
});

module.exports = router;