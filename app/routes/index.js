var express = require('express' );
var router = express.Router();
 
 
 router.get('/', function(req, res) {
  res.send(`
      <h1>ІВАН КОТЛЯРЕВСЬКИЙ</h1>
      <h2><b>поема</h2>
  `);
});

module.exports = router;