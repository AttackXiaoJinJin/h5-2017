var express = require('express');
var router = express.Router();

/* GET home page. */
//get请求
/*
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
    res.send("this is index");
  //   { id: '001', passwd: '12345' }
 // console.log(req.query.id);
// res.json({"res":true});

});
*/
//use可以任意使用
router.use('/', function(req, res, next) {
    console.log("use index`");
    next();
});
//用all代替get,post
router.all('/', function(req, res, next) {
    res.send("from adduser");
});


//post,通过地址栏不能发送post
/*
router.post('/', function(req, res, next) {
    // res.send("i am post,index");
    // console.log(req.body);


});
*/
module.exports = router;
