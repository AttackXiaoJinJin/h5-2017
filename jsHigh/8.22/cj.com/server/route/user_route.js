var user_dao=require("../DAO/user_dao").user;

var userRoute={
    login:function (request,response) {
        console.log("this is login");
        //request是一个对象，只调用其中的url属性
        console.log(request.url);

        var url=request.url;
        //只需url中的用户id和passwd
        //将/?截断
        var data01=url.split("?")[1];
        var data02=data01.split("&");
        var id=data02[0].split("=")[1];
        var passwd=data02[1].split("=")[1];
        var userAll={
            userId:id,
            userPasswd:passwd
        };
        if(id.trim().length!=0 && passwd.trim().length!=0){
            //select count(1) from user where userId=id and userPasswd=passwd;
            //异步执行
            response.writeHead(200,{"Content-Type":"text/html,charset=utf-8","Access-Control-Allow-Origin":"*"});
            //将user_route的userAll对象传给user_dao,
            //先执行userAll,到user_dao中
            user_dao.login(userAll,function (result) {
                if(result==1){
                    response.write("1");
                }else {response.write("2");}
            });
        }else{response.write("0");}
        response.end();
    }

};
//别少这句话
exports.userRoute=userRoute;