$(function () {
    var phone = $("#login_phone");
    var passwd= $("#login_passwd");
    var login=$("#btn_login");
    phone.blur(function () {
        checkPhone();

    });
    passwd.blur(function () {
        checkPasswd();
    });

    login.click(function () { console.log("aaa");
      if( checkPasswd() && checkPhone() ){

          $.ajax({
              type: 'post',
              url: 'http://localhost:3001/user/login',
              data: $('#loginForm').serialize(),
              dataType: 'text',
              success: function (state_code) {
                      if(state_code=="1"){
                          //跳转
                          location.href="index.html";
                      }else if(state_code=="3"){
                          alert("用户名不存在");
                      }else if(state_code=="2"){
                          alert("用户名或密码错误");
                      }
                  },
              error: function (err) {
              }
          });
          window.sessionStorage.setItem("loginPhone",phone.val());

      }
    });


});
//======================window.onload

function checkPhone() {
    var phone = $("#login_phone");
    var err_phone = $("#login_err_phone");
    if (phone.val().trim()) {
        var reg = /^1[34578]\d{9}$/;
        if (reg.test(phone.val())) {
            err_phone.html("");
            return true;
        } else {
            err_phone.html("手机号码格式不正确");
            return false;
        }
    } else {
        err_phone.html("手机号不能为空");
        return false;
    }
}
//=======checkPasswd
function checkPasswd() {
    var passwd = $("#login_passwd");
    var err_passwd = $("#login_err_passwd");
    if (passwd.val().trim() && passwd.val().length >=6) {
        err_passwd.html("");
        return true;
    } else {
        err_passwd.html("密码长度至少六位");
        return false;
    }
}
