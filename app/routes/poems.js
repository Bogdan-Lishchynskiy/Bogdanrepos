var express = require('express' );
var router = express.Router();
 
 


router.get('/poems', function(req, res) {
  
  var info = '';
  var dataFile = req.app.get('appData');
  dataFile.eneida.forEach(function(item) {
    info += `
    
      <h2>${item.row}</h2>
      <p>${item.text}</p>
    
    `;
  });
  res.send(`
      <h1>ІВАН КОТЛЯРЕВСЬКИЙ</h1>
      ${info}
  `);
});
 
 
router.get('/poems/:poemid', function(req, res) {
var dataFile = req.app.get('appData');  
var poem = dataFile.eneida[req.params.poemid]; 
  
   
  res.send(`
	  <h3>${poem.row}</h3>
      <p>${poem.text}</p>
  `);
}); 

module.exports = router;