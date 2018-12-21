//基本信息

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
var uname = decodeURI(res.uname);//把uname解码



console.log(uname);
getAjax(uname);
function getAjax(uname){
    $.ajax({
        type : "post",
        url : "http://127.0.0.1/Volunteer_to_simulate/Super_admin_user/php/super_admin_basic_select.php",
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


$.ajax({
    type: "post",
    url: "http://127.0.0.1/Volunteer_to_simulate/Super_admin_user/php/super_admin_basic_select.php",
    async: true,
    data: {
        uname: uname
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
    var url="http://127.0.0.1/Volunteer_to_simulate/Super_admin_user/php/super_admin_basic_updata.php";
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
        url : "http://127.0.0.1/Volunteer_to_simulate/Super_admin_user/php/super_admin_upwd_updata.php",
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



//遍历元素,给nav加特效
$("nav div").each(function (index,item) {
    //$(item).attr("myIndex","index");
    $(item).mouseover(function () {
        $(this).css("cursor","pointer");
    })
    $(item).click(function () {
        //console.log(index);
        $(this).css({
            "color" : "#e19b04"
        }).siblings().css({
            "color" : "#646464"
        });
        $("section > div").eq(index).css("display","block").siblings().css("display","none");

        if (index == 1){//获取所有普通管理员账号信息
            if ($("#table_information p").next()){
                $("#table_information p").next().remove();
            }
            var url = "http://127.0.0.1/Volunteer_to_simulate/Super_admin_user/php/super_admin_index.php";
            var obj = $("#table_information");
            jqAjax(url,obj,1);
        }else if (index == 2){//获取所有客服账号信息
            if ($("#table_information1 p").next()){
                $("#table_information1 p").next().remove();
            }
            var url = "http://127.0.0.1/Volunteer_to_simulate/Super_admin_user/php/super_admin_index.php";
            var obj = $("#table_information1");
            jqAjax(url,obj,2);
        }
    })
})

//从数据库取所有普通管理员账号信息
//[{"id":"1","uname":"999@qq.com","upwd":"123456qq"},{"id":"2","uname":"231@qq.com","upwd":"1111qqqq"}]
//封装ajax
function jqAjax(url,obj,index,val) {
    $.ajax({
        type : "post",
        url: url,
        async : true,
        data : {
            index : index,
            val : val
        }
        ,
        success : function (msg) {
            //console.log(typeof msg);
            if (msg == 0){
                $(obj).append($("<strong style='font-size: 30px;color: red'>该用户不存在</strong>"));

            } else {
                var arr = JSON.parse(msg);
                var str = "";
                str += `
                    <table>
                        <tr>
                            <th>序号</th>
                            <th>用户名</th>
                            <th>密码</th>
                            <th>操作</th>
                        </tr>
                `;
                for (var i = 0;i < arr.length;i ++){
                    //{"id":"1","uname":"999@qq.com","upwd":"123456qq"}
                    var cur = arr[i];
                    //console.log(cur);
                    str += `
                        <tr>
                            <td>${cur.id}</td>
                            <td>${cur.uname}</td>
                            <td>${cur.upwd}</td>
                            <td>
                                <a href="javascript:;" class="del" sid="${cur.id}">删除</a> | 
                                <a href="javascript:;" class="updata" sid="${cur.id}" uname="${cur.uname}" upwd="${cur.upwd}">修改</a>
                            </td>
                        </tr>
                    `;
                }
                str += `</table>`;
                $(obj).append(str);
            }

        }
    })
}


//普通管理员查询
$("#query_btn").click(function () {
    var val = $("#uname").val();
    //console.log(val);
    if (val == ""){
        return;
    }

    if ($("#table_information p").next()){
        $("#table_information p").next().remove();
    }
    var url = "http://127.0.0.1/Volunteer_to_simulate/Super_admin_user/php/super_admin_select.php";
    var obj = $("#table_information");
    jqAjax(url,obj,1,val);

})
//客服账号查询
$("#query_btn1").click(function () {
    var val = $("#uname1").val();
    //console.log(val);
    if (val == ""){
        return;
    }
    if ($("#table_information1 p").next()){
        $("#table_information1 p").next().remove();
    }
    var url = "http://127.0.0.1/Volunteer_to_simulate/Super_admin_user/php/super_admin_select.php";
    var obj = $("#table_information1");
    jqAjax(url,obj,2,val);

})


//增加普通管理员账号
$("#add_btn").click(function () {
    var url = location.href;//取出当前页面的url
    var res = addres(url);//将url传参的数据，以对象的形式展示出来
//console.log(res); //{id: "6", uname: "546@qq.com", upwd: "11111111qq"}
    var uname = decodeURI(res.uname);//把uname解码

    location.href = "http://127.0.0.1/Volunteer_to_simulate/Super_admin_user/html/admin_add.html?uname="+uname;
})

//增加客服账号
$("#add_btn1").click(function () {
    var url = location.href;//取出当前页面的url
    var res = addres(url);//将url传参的数据，以对象的形式展示出来
//console.log(res); //{id: "6", uname: "546@qq.com", upwd: "11111111qq"}
    var uname = decodeURI(res.uname);//把uname解码

    location.href = "http://127.0.0.1/Volunteer_to_simulate/Super_admin_user/html/customer_add.html?uname="+uname;
})


//删除ajax
function delAjax(id,index){
    $.ajax({
        type : "post",
        url : "http://127.0.0.1/Volunteer_to_simulate/Super_admin_user/php/super_admin_del.php",
        async : true,
        data : {
            id : id,
            index : index
        },
        success : function (msg) {
            console.log(msg);
            if(msg == 1){
                alert("删除成功");
                window.location.reload();
            }
        }
    })
}

//删除普通管理员信息
$("#table_information").click(function () {
    var e = e || event;
    var target = e.target || e.srcElement;
    if(target.nodeName == "A" && target.className == "del") {
        var id = target.getAttribute("sid");
        console.log(id);
    }
    delAjax(id,1);



    //修改密码
    if(target.nodeName == "A" && target.className == "updata") {
        var url = location.href;//取出当前页面的url
        var res = addres(url);//将url传参的数据，以对象的形式展示出来
//console.log(res); //{id: "6", uname: "546@qq.com", upwd: "11111111qq"}
        var uname1 = decodeURI(res.uname);//把uname解码


        var id = target.getAttribute("sid");
        var uname = target.getAttribute("uname");
        var upwd = target.getAttribute("upwd");
        var url = "http://127.0.0.1/Volunteer_to_simulate/Super_admin_user/html/admin_updata.html?id="+id+"&uname="+uname+"&upwd="+upwd+"&uname1="+uname1;
        url = encodeURI(url);//注意 ：一个html页面跳到另一个html页面 如果在url后面问号传参；参数中如果有中文；先编码；再解码
        location.href = url;
    }


})

//删除客服信息
$("#table_information1").click(function () {
    var e = e || event;
    var target = e.target || e.srcElement;
    if(target.nodeName == "A" && target.className == "del") {
        var id = target.getAttribute("sid");
        console.log(id);
    }
    delAjax(id,2);

    //修改密码
    if(target.nodeName == "A" && target.className == "updata") {
        var url = location.href;//取出当前页面的url
        var res = addres(url);//将url传参的数据，以对象的形式展示出来
//console.log(res); //{id: "6", uname: "546@qq.com", upwd: "11111111qq"}
        var uname1 = decodeURI(res.uname);//把uname解码


        var id = target.getAttribute("sid");
        var uname = target.getAttribute("uname");
        var upwd = target.getAttribute("upwd");
        var url = "http://127.0.0.1/Volunteer_to_simulate/Super_admin_user/html/customer_updata.html?id="+id+"&uname="+uname+"&upwd="+upwd+"&uname1="+uname1;
        url = encodeURI(url);//注意 ：一个html页面跳到另一个html页面 如果在url后面问号传参；参数中如果有中文；先编码；再解码
        location.href = url;
    }


})








