var express = require('express');
var router = express.Router();
/*
//登录过滤器
function isLogin(req, res, next) {
    //判断是否登录
    if (false) {
        next();
    } else {
        //重定向
        // res.redirect("/users/login");
        // next("login");
    }
}




router.get('/', isLogin, function (req, res, next) {
    // res.send('respond with a resource');
    //转向
    // res.redirect("/users/adduser")
    console.log("已经登录")
});

router.post(/addUser(\w)/, isLogin, function (req, res, next) {
    res.send('this is addUser');
});
router.post(/login(\w)/, function (req, res, next) {
    res.send('开始登录');
});
//读取jade的login文件
router.get(/login(\w)/, function (req, res, next) {
    res.render("login");
});
*/
var aa=new Date();
//该路由使用的中间件
router.use(function timeLog(req,res,next) {
   console.log("Time:",aa.toLocaleDateString());
   next();
});

router.param('id', function (req, res, next, id) {
    console.log('who');
    next();
});
//定义主页路由
router.get("/:id",function (req,res,next) {
   res.send("欢迎:"+req.params.id);
   // console.log("这是主页");
   //  next();
});
router.get("/",function (req,res,next) {
   // res.send("这也是主页");
   // console.log("这也是主页");
   // res.end();

});

//定义about页面
router.get("/about",function (req,res,next) {
    // res.send("这是about");
    console.log("这是about");
    res.end();
});

module.exports = router;










