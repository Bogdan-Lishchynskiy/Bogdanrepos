var express = require('express' );
var router = express.Router();
 
 


router.get('/poems', function(req, res) {
  
  var info = '';
  var dataFile = req.app.get('appData');
  dataFile.poems.forEach(function(item) {
    info += `
    
      <h2>${item.name}</h2>
      <p>${item.summary}</p>
    
    `;
  });
  res.send(`
      <h1>ІВАН КОТЛЯРЕВСЬКИЙ</h1>
      ${info}
  `);
});
 
 
router.get('/poems/:poemid', function(req, res) {
var dataFile = req.app.get('appData');  
var poem = dataFile.poems[req.params.poemid]; 
  
   
  res.send(`
      <h1>${poem.title}</h1>
	  <h2>${poem.name}</h2>
	  <h3>${poem.shortname}</h3>
      <p>${poem.summary}</p>
  `);
}); 

module.exports = router;