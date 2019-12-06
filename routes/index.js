var express = require('express');
var router = express.Router();
var sql = require('../utils/sql')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ngoc', image: 'images/friends.svg' });
});

router.get('/character/:id', function(req,res,next){
  console.log(req.params.id)
  let query = `SELECT * FROM friends_data WHERE ID=${req.params.id}`

  sql.query(query,(err,result)=>{
    if(err){
      throw err;
    }
    console.info(result[0]);
    res.render('index', { rank: 'Rank #' + result[0].Rank, lines: '- ' + result[0].Lines + ' lines', name: result[0].Name, saying: 'Famous line: ' + result[0].Sayings, image: 'images/friends.svg'});

  })
})

module.exports = router;
