$(function () {
    var regist_phone = $("#regist_phone");
    var regist_passwd = $("#regist_passwd");
    var conf_passwd = $("#regist_conf_passwd");
    regist_phone.blur(function () {
        checkPhone();
    });
    regist_passwd.blur(function () {
        checkPasswd();
    });
    conf_passwd.blur(function () {
        checkPassConf();
    });


    $('#btn_regist').click(function () {
        if (checkPhone() && checkPasswd() && checkPassConf()) {
            $.ajax({
                type:'post',
                url:'http://localhost:3001/user/regist',
                data:$('#registForm').serialize(),
                dataType:'text',
                success:function (data) {
                    if(data=="6"){
                        //跳转
                        location.href="index.html";
                    }else if(data=="5"){
                        alert("用户名已存在");
                    }else if(data=="7"){
                        alert("注册失败");
                    }
                },
                error:function (err) {
                }
            });
            window.sessionStorage.setItem("registPhone",regist_phone.val());
        }
    });

});

function checkPhone() {
    var phone = $("#regist_phone");
    var err_phone = $("#regist_err_phone");
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

function checkPasswd() {
    var passwd= $("#regist_passwd");
    var err_passwd = $("#regist_err_passwd");
    if (passwd.val().trim() && passwd.val().length >=6) {
        err_passwd.html("");
        return true;
    } else {
        err_passwd.html("密码长度至少六位");
        return false;
    }
}

function checkPassConf() {
    if(checkPasswd()){
        if($("#regist_passwd").val().trim()==$("#regist_conf_passwd").val().trim()){
            return true;
        }else{
            $("#conf_err_passwd").html("两次密码输入不一致");
           // console.log("aaaaa");
            return false;
        }
    }
}