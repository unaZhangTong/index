//导航栏跳转
$("nav div").each(function (index,item) {
    //$(item).attr("myIndex","index");
    $(item).mouseover(function () {
        $(this).css("cursor", "pointer");
    })
})

//点击普通用户账号管理，跳转到账号管理页面
$("#admin_account").click(function () {
    //获取当前页面的url，获取用户名
    var url = location.href;
    var res = addres(url);//将url传参的数据以对象的形式展示出来-public函数addres
    var uname1 = decodeURI(res.uname);//把uname解码

    location.href = "http://127.0.0.1/Volunteer_to_simulate/Admin_user/admin_account.html?uname="+uname1;

})

//点击高校信息，跳转到高校信息页面
$("#school_Information").click(function () {
    //获取当前页面的url，获取用户名
    var url = location.href;
    var res = addres(url);//将url传参的数据以对象的形式展示出来-public函数addres
    var uname1 = decodeURI(res.uname);//把uname解码

    location.href = "http://127.0.0.1/Volunteer_to_simulate/Admin_user/school_Information.html?uname="+uname1;

})

//点击公告管理，跳转到公告管理页面
$("#announcement").click(function () {
    //获取当前页面的url，获取用户名
    var url = location.href;
    var res = addres(url);//将url传参的数据以对象的形式展示出来-public函数addres
    var uname1 = decodeURI(res.uname);//把uname解码

    location.href = "http://127.0.0.1/Volunteer_to_simulate/Admin_user/announcement.html?uname="+uname1;

})

//更改个人头像
$("#upload_btn").on("click",function () {
    $("#files").click();

    $("#files").on("change",function () {
        var objUrl = getObjectURL(this.files[0]);//获取图片路径
        console.log(objUrl);
        if (objUrl) {
            $("#pic").attr("src",objUrl);//将图片路径存入src中，显示图片
        }
    })
})


//个人信息数据库存取

//取数据
//导入数据
var url = location.href;//取出当前页面的url
var res = addres(url);//将url传参的数据，以对象的形式展示出来
//console.log(res); //{id: "6", uname: "546@qq.com", upwd: "11111111qq"}
var uname1 = decodeURI(res.uname);//把uname解码



console.log(uname1);
getAjax(uname1);
function getAjax(uname){
    $.ajax({
        type : "post",
        url : "http://127.0.0.1/Volunteer_to_simulate/Admin_user/php/admin_basic_select.php",
        async : true,
        data : {
            uname : uname
        },
        success : function (msg) {
            var arr = JSON.parse(msg);
            console.log(arr);
            console.log(arr[0].userName);
            var str = "";
            str += `<table id="show_basic">
                                    <tr>
                                        <td><span>姓名</span><b id="un">${arr[0].userName}</b></td>
                                    </tr>
                                    <tr>
                                        <td><span>性别</span><b id="se">${arr[0].sex}</b></td>
                                    </tr>
                                    <tr>
                                        <td><span>年龄</span><b id="ag">${arr[0].age}</b></td>
                                    </tr>
                                    <tr>
                                        <td><span>邮箱</span><b id="em">${arr[0].email}</b></td>
                                    </tr>
                                    <tr>
                                        <td><span>联系方式</span><b id="ph">${arr[0].phone}</b></td>
                                    </tr>
                                    <tr>
                                        <td><span>部门</span><b id="de">${arr[0].department}</b></td>
                                    </tr>
                                    <tr>
                                        <td><span>职位</span><b id="po">${arr[0].position}</b></td>
                                    </tr>
                                    <tr>
                                        <td><button id="modify_information">修改信息</button></td>
                                    </tr>
                                </table>`;
            $("#basic_content").append(str);
        }
    })
}


$("#basic_content").on("click","#modify_information",function () {
    $("#show_basic").css("display","none");
    $("#change_basic").css("display","block");
})





//利用ajax存取数据
$.ajax({
    type: "post",
    url: "http://127.0.0.1/Volunteer_to_simulate/Admin_user/php/admin_basic_select.php",
    async: true,
    data: {
        uname: uname1
    },
    success: function (msg) {
        var arr = JSON.parse(msg);
        console.log(arr);
        console.log(arr[0].userName);
        $("#userName").val(arr[0].userName);
        $("#sex").val(arr[0].sex);
        $("#age").val(arr[0].age);
        $("#email").val(arr[0].email);
        $("#phone").val(arr[0].phone);
        $("#department").val(arr[0].department);
        $("#position").val(arr[0].position);
        $("#user").val(arr[0].uname);
        $("#pwd").val(arr[0].upwd);
    }
})


//利用ajax修改数据
function basicAjax(url,uname,userName,sex,age,email,phone,department,position){
    $.ajax({
        type : "post",
        url : url,
        async : true,
        data : {
            uname : uname,
            userName : userName,
            sex : sex,
            age : age,
            email : email,
            phone : phone,
            department : department,
            position : position
        },
        success : function (msg) {
            alert("修改成功");
            location.reload();
        }
    })
}


//存数据
$("#change_btn").click(function () {
    var url = location.href;//取出当前页面的url
    var res = addres(url);//将url传参的数据，以对象的形式展示出来
//console.log(res); //{id: "6", uname: "546@qq.com", upwd: "11111111qq"}
    var uname = decodeURI(res.uname);//把uname解码


    var userName = $("#userName").val();
    var sex = $("#sex").val();
    var age = $("#age").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var department = $("#department").val();
    var position = $("#position").val();

    if (userName == "" || sex == "" || age == "" || email == "" || phone == "" || department == "" || position == ""){
        $(this).css("background","red");
        alert("请将信息写全，内容不能为空!!");
        return;
    }
    var url="http://127.0.0.1/Volunteer_to_simulate/Admin_user/php/admin_basic_updata.php";
    basicAjax(url,uname,userName,sex,age,email,phone,department,position);
})


//改密码
$("#change_upwd").click(function () {
    var url = location.href;//取出当前页面的url
    var res = addres(url);//将url传参的数据，以对象的形式展示出来
//console.log(res); //{id: "6", uname: "546@qq.com", upwd: "11111111qq"}
    var uname = decodeURI(res.uname);//把uname解码
    var upwd = $("#pwd").val();

    if (upwd == ""){
        $(this).css("background","red");
        alert("请将信息写全，内容不能为空!!");
        return;
    }
    $.ajax({
        type : "post",
        url : "http://127.0.0.1/Volunteer_to_simulate/Admin_user/php/admin_upwd_updata.php",
        async : true,
        data : {
            uname : uname,
            upwd : upwd
        },
        success : function (msg) {
            alert("修改成功");
            location.reload();
        }
    })
})




