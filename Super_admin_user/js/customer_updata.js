// 用户名输入判断
// $("#uname").change(function () {
//     var reg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
//     var val = $("#uname").val();
//     if (reg.test(val)){
//         $("#uname").next().css("color","#666666");
//         $("#uname").next().html("用户名输入正确 √");
//     }else{
//         $("#uname").next().css("color","red");
//         $("#uname").next().html("用户名请使用邮箱账号");
//     }
// })
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


//导入数据
var url = location.href;//取出当前页面的url
var res = addres(url);//将url传参的数据，以对象的形式展示出来
//console.log(res); //{id: "6", uname: "546@qq.com", upwd: "11111111qq"}
var uname = decodeURI(res.uname);//把uname解码
$("#uname").val(uname);
$("#upwd").val(res.upwd);
var uname1 = res.uname1;
console.log(uname1);

//确认按钮

$("#confirm_btn").click(function () {
    var regUpwd = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
    var upwd = $("#upwd").val();
    var uname = $("#uname").val();
    if (upwd == "" || !regUpwd.test(upwd)){
        return;
    }

    $.ajax({
        type : "post",
        url : "http://127.0.0.1/Volunteer_to_simulate/Super_admin_user/php/super_admin_customer_updata.php",
        async : true,
        data: {
            id : res.id,
            uname : uname,
            upwd : upwd
        },
        success : function (msg) {
            // console.log(msg.substr(-1,1))
            // msg = msg.substr(-1,1);
            //console.log(msg);
            // if(msg == 0){
            //     $("#main").css("display","none").siblings().css("display","block").html("修改失败");
            //     var uname = $("#uname").val();
            //     var upwd = $("upwd").val();
            //     setTimeout(function () {
            //         location.href = "http://127.0.0.1/Volunteer_to_simulate/Super_admin_user/html/admin_updata.html?uname="+uname+"&upwd="+upwd;
            //     },1000)
            // }else
            if (msg == 1) {
                $("#main").css("display","none").siblings().css("display","block").html("修改成功");
                setTimeout(function () {
                    location.href = "http://127.0.0.1/Volunteer_to_simulate/Super_admin_user/super_admin_index.html?uname="+uname1;
                },1000)
            }
        }
    })



})


//点击返回主页
$("#cancel_btn").click(function () {
    location.href = "http://127.0.0.1/Volunteer_to_simulate/Super_admin_user/super_admin_index.html?uname="+uname1;
})