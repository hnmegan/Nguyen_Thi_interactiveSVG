var express = require('express');
var router = express.Router();
var sql = require('../utils/sql')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ngoc' });
});

router.get('/character/:id', function(req,res,next){
  console.log(req.params.id)
  let query = `SELECT * FROM friends_data WHERE ID=${req.params.id}`

  sql.query(query,(err,result)=>{
    if(err){
      throw err;
    }
    console.log(result)
    res.json(result[0])
  })
})

module.exports = router;
