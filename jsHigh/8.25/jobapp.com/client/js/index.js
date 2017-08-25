$(function () {
    //获取id
   var user_id=window.sessionStorage.getItem("userId");
   var userBar=$("#user_bar");
   if(user_id){
       var str= '<li>欢迎:<a href="login.html">'+user_id+'</a></li>';

        userBar.html(str);
    }else{
        var str= '<li><a href="login.html">登录</a></li>'+
       '<li><a href="regist.html">注册</a></li>';
        userBar.html(str);
    }




});