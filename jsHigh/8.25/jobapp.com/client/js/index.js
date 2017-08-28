$(function () {
    //获取id
   var user_phone=window.sessionStorage.getItem("loginPhone");
   console.log(user_phone);
   var userBar=$("#user_bar");
   if(user_phone){
       var go= '<li>欢迎:<a href="login.html">'+user_phone+'</a></li>';

        userBar.html(go);
    }else{
        var stay= '<li><a href="login.html">登录</a></li>'+
       '<li><a href="regist.html">注册</a></li>';
        userBar.html(stay);
    }




});