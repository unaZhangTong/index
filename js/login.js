// 用户名输入判断
$("#uname").change(function () {
    var reg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
    var val = $("#uname").val();
    if (reg.test(val)){
        $("#uname").next().css("color","#666666");
        $("#uname").next().html("确认用户名是否正确 √");
    }else{
        $("#uname").next().css("color","red");
        $("#uname").next().html("用户名请使用邮箱账号");
    }
})
//密码输入判断
$("#upwd").change(function () {
    var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
    var val = $("#upwd").val();
    if (reg.test(val)){
        $("#upwd").next().css("color","#666666");
        $("#upwd").next().html("确认密码是否正确 √");
    }else{
        $("#upwd").next().css("color","red");
        $("#upwd").next().html("密码由字母、数字组成，长度8-16位");
    }
})
//登录与数据库内容判断
$("#login_btn").click(function () {
    var uname = $("#uname").val();
    var upwd = $("#upwd").val();
    var optionVal = $("#user_type").val();
    console.log(optionVal);

    $.ajax({
        type : "post",
        url : "http://127.0.0.1/Volunteer_to_simulate/php/login.php",
        async : true,
        data : {
            uname : uname,
            upwd : upwd,
            optionVal : optionVal
        },
        success : function (msg) {
            if (msg == uname){
                if (optionVal == 1){
                    location.href = "Normal_user/normal_index.html?uname="+uname;
                } else if (optionVal == 2){
                    location.href = "Admin_user/admin_index.html?uname="+uname;
                } else if (optionVal == 3){
                    location.href = "Customer_service_user/customer_service_index.html?uname="+uname;
                } else if (optionVal == 4){
                    location.href = "Super_admin_user/super_admin_index.html?uname="+uname;
                }

            } else if (msg == 2){
                alert("密码错误，请重新输入");
            } else {
                alert("该用户不存在，请注册");
            }
        }
    })
})
