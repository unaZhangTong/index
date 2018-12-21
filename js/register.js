// 用户名输入判断
$("#uname").change(function () {
    var reg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
    var val = $("#uname").val();
    if (reg.test(val)){
        $("#uname").next().css("color","#666666");
        $("#uname").next().html("用户名输入正确 √");
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
        $("#upwd").next().html("密码符合要求 √");
    }else{
        $("#upwd").next().css("color","red");
        $("#upwd").next().html("密码由字母、数字组成，长度8-16位");
    }
})
//确认密码判断
$("#confirmUpwd").change(function () {
    var val = $("#upwd").val();
    if ($(this).val() == val){
        $("#confirmUpwd").next().css("color","#666666");
        $("#confirmUpwd").next().html("密码一致 √");
    }else{
        $("#confirmUpwd").next().css("color","red");
        $("#confirmUpwd").next().html("输入密码不一致，请再次输入");
    }
})

//把注册的信息使用ajax存入数据库
$("#register_btn").click(function () {
    var uname = $("#uname").val();
    var upwd = $("#upwd").val();
    var confirmUpwd = $("#confirmUpwd").val();
    if (uname == "" || upwd == "" || confirmUpwd == ""){
        return;
    }
    // console.log(1)
    // $.post("register.php",{name:"John",location:"Boston"},function (data) {
    //     console.log(data)
    // })

    $.ajax({
        type : "post",
        url : "http://127.0.0.1/Volunteer_to_simulate/php/register.php",
        async : true,
        data: {
            uname : uname,
            upwd : upwd
        },
        success : function (msg) {
            // console.log(msg.substr(-1,1))
            // msg = msg.substr(-1,1);
            console.log(msg);
            if(msg == 0){
                alert("该用户已存在");
            }else if (msg == 1) {
                alert("注册成功");
            }else {
                alert("注册失败");
            }
        }
    })
})
