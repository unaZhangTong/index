//导航栏跳转
$("nav div").each(function (index,item) {
    //$(item).attr("myIndex","index");
    $(item).mouseover(function () {
        $(this).css("cursor", "pointer");
    })
})

//点击个人信息，跳转到个人信息页面
$("#personal_information").click(function () {
    //获取当前页面的url，获取用户名
    var url = location.href;
    var res = addres(url);//将url传参的数据以对象的形式展示出来-public函数addres
    var uname1 = decodeURI(res.uname);//把uname解码

    location.href = "http://127.0.0.1/Volunteer_to_simulate/Admin_user/admin_index.html?uname="+uname1;

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


//获取所有普通用户信息账号信息

//[{"id":"1","uname":"999@qq.com","upwd":"123456qq"},{"id":"2","uname":"231@qq.com","upwd":"1111qqqq"}]
//封装ajax
function jqAjax(url,obj,val) {
    $.ajax({
        type : "post",
        url: url,
        async : true,
        data : {
            val : val
        },
        success : function (msg) {
            //console.log(typeof msg);
            if (msg == 0){
                $(obj).append($("<strong style='font-size: 30px;color: red'>该用户不存在</strong>"));
                setTimeout(function () {
                    location.reload();
                },1000)

            } else {
                // console.log(msg);
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



//如果有内容，先删除，再添加

if ($("#table_information p").next()){
    $("#table_information p").next().remove();
}

//查询全部内容
var url = "http://127.0.0.1/Volunteer_to_simulate/Admin_user/php/admin_account_select.php";
var obj = $("#table_information");
jqAjax(url,obj);

//单个用户查询
$("#query_btn").click(function () {
    var val = $("#uname").val();
    //console.log(val);
    if (val == ""){
        return;
    }

    if ($("#table_information p").next()){
        $("#table_information p").next().remove();
    }
    var url = "http://127.0.0.1/Volunteer_to_simulate/Admin_user/php/admin_account_select_one.php";
    var obj = $("#table_information");
    jqAjax(url,obj,val);

})




//删除账号ajax
function delAjax(id){
    $.ajax({
        type : "post",
        url : "http://127.0.0.1/Volunteer_to_simulate/Admin_user/php/admin_account_del.php",
        async : true,
        data : {
            id : id
        },
        success : function (msg) {
            // console.log(msg);
            if(msg == 1){
                alert("删除成功");
                window.location.reload();
            }
        }
    })
}

//删除和修改
$("#table_information").click(function () {
    var e = e || event;
    var target = e.target || e.srcElement;
    //删除普通用户信息
    if(target.nodeName == "A" && target.className == "del") {
        var id = target.getAttribute("sid");
        console.log(id);
    }
    delAjax(id);



    //修改普通用户密码
    if(target.nodeName == "A" && target.className == "updata") {
        var url = location.href;//取出当前页面的url
        var res = addres(url);//将url传参的数据，以对象的形式展示出来
//console.log(res); //{id: "6", uname: "546@qq.com", upwd: "11111111qq"}
        var uname1 = decodeURI(res.uname);//把uname解码


        var id = target.getAttribute("sid");
        var uname = target.getAttribute("uname");
        var upwd = target.getAttribute("upwd");
        var url = "http://127.0.0.1/Volunteer_to_simulate/Admin_user/html/admin_account_updata.html?id="+id+"&uname="+uname+"&upwd="+upwd+"&uname1="+uname1;
        url = encodeURI(url);//注意 ：一个html页面跳到另一个html页面 如果在url后面问号传参；参数中如果有中文；先编码；再解码
        location.href = url;
    }


})





