//DAO数据管理层
exports.user={
    //userAll即request
    //启用回调函数，进行同步处理验证
    login:function (userAll,callback) {
        // console.log("this is user_dao");
        //console.log(JSON.stringify(userAll));
        //调用数据库
        id01="chen";
        passwd01="sy";
        //顺序:user_route->userAll->user_dao->userAll->callback->user_route->function(result)
        //判断执行完后执行回调函数
        if(userAll.userId==id01&&userAll.userPasswd==passwd01){
            callback(1);
        }else {
            callback(0);
        }
    }
};