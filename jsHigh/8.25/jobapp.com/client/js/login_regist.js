$(function () {

    var phone=$("#user_phone");
    var conf_passwd=$("#conf_passwd");
    phone.blur(function () {
        checkPhone();

    });
    phone.keypress=function (event) {
        console.log(event.keyCode);
       /* if(event.keyCode==13){
           // checkPhone();
            console.log("aa");
           passwd.focus();
        }*/
    };

    var input_passwd = $("#input_passwd");
    input_passwd.blur(function () {
        checkPasswd();
    });
    input_passwd.keypress(function (event) {
        checkPasswd();
    });

    conf_passwd.blur(function () {
        checkPassConf();
    });
    conf_passwd.keypress(function (event) {
        checkPasswd();
    });

    $('#btn_regist').click(function () {
        if(checkPhone() && checkPasswd() && checkPassConf()){
            $.ajax({
                type: 'post',
                url: 'http://localhost:3001/user/regist',
                data: $('#registForm').serialize(),
                dataType: 'text',
                success: function (state_code) {
                    if (state_code == "6") {
                        sessionStorage.setItem("userId",$("#phone").val());
                        location.href = "../webs/index.html";
                    } else if (state_code == "7") {
                        alert("注册失败");
                    }else if(state_code==5""){
                        alert("该用户不存在");

                    }else{
                        location.href="../webs/404.html";
                    }
                },
                error: function (err) {
                }
            });

    }
});


function checkPhone() {
    var phone = $("#user_phone");
    var err_phone = $("#err_phone");
    // console.log(phone.val().trim());
    if (phone.val().trim()) {
        var reg = /^1[34578]\d{9}$/;
        if (reg.test(phone.val())) {
            err_phone.html("");
            return true;
        } else {
            err_phone.html("号码格式不正确");
            return false;
        }
    } else {
        err_phone.html("手机号不能为空");
        return false;
    }
}

function checkPasswd() {
    var passwd = $("#passwd");
    var err_passwd = $("#err_passwd");
    if (passwd.val().trim() && passwd.val().length > 6) {
        err_passwd.html("");
        return true;
    } else {
        err_passwd.html("密码长度至少六位");
        return false;
    }
}
//===============

function checkPassConf() {
    if(checkPasswd()){
        if($("#input_passwd").val().trim()==$("#conf_passwd").val().trim()){
            return true;
        }else{
            $("#err_conf_passwd")
        }
    }
}

