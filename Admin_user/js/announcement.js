//导航栏跳转
$("nav div").each(function (index,item) {
    //$(item).attr("myIndex","index");
    $(item).mouseover(function () {
        $(this).css("cursor", "pointer");
    })
})

//获取当前页面的url，获取用户名
var url = location.href;
var res = addres(url);//将url传参的数据以对象的形式展示出来-public函数addres
var uname1 = decodeURI(res.uname);//把uname解码

//点击个人信息，跳转到个人信息页面
$("#personal_information").click(function () {


    location.href = "http://127.0.0.1/Volunteer_to_simulate/Admin_user/admin_index.html?uname="+uname1;

})

//点击普通用户账号管理，跳转到账号管理页面
$("#admin_account").click(function () {


    location.href = "http://127.0.0.1/Volunteer_to_simulate/Admin_user/admin_account.html?uname="+uname1;

})

//点击高校信息，跳转到高校信息页面
$("#school_Information").click(function () {


    location.href = "http://127.0.0.1/Volunteer_to_simulate/Admin_user/school_Information.html?uname="+uname1;

})












//发布新公告
$("#add_new").click(function () {

    location.href = "http://127.0.0.1/Volunteer_to_simulate/Admin_user/html/announcement_add.html?uname="+uname1;
})

