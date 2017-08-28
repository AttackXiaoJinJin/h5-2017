var express = require('express');
var router = express.Router();

/* GET home page. */
//get请求
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  //   res.send("i am get,index");
  //   { id: '001', passwd: '12345' }
 // console.log(req.query.id);
res.json({"res":true});
});

router.get('/adduser', function(req, res, next) {
    res.send("this is adduser");
});

//post,通过地址栏不能发送post

router.post('/', function(req, res, next) {
    // res.send("i am post,index");
    console.log(req.body);
});

module.exports = router;
