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

//点击普通用户账号管理，跳转到账号管理页面
$("#admin_account").click(function () {
    //获取当前页面的url，获取用户名
    var url = location.href;
    var res = addres(url);//将url传参的数据以对象的形式展示出来-public函数addres
    var uname1 = decodeURI(res.uname);//把uname解码

    location.href = "http://127.0.0.1/Volunteer_to_simulate/Admin_user/admin_account.html?uname="+uname1;

})

//点击公告管理，跳转到公告管理页面
$("#announcement").click(function () {
    //获取当前页面的url，获取用户名
    var url = location.href;
    var res = addres(url);//将url传参的数据以对象的形式展示出来-public函数addres
    var uname1 = decodeURI(res.uname);//把uname解码

    location.href = "http://127.0.0.1/Volunteer_to_simulate/Admin_user/announcement.html?uname="+uname1;

})



//获取所有学校信息


//分页
var page = 1;//当前页代表页码
var num = 4;//每页显示5条数据
var total = null;


//加载全部数据
function Load(url,uname1) {
    $.ajax({
        type : "get",
        url : url,
        async : true,
        data : {
            uname : uname1
        },
        success : function (msg) {

            var arr = JSON.parse(msg);
            console.log(arr);
            var str = "";
            for (var k = (page - 1) * num;k < page * num;k ++){
                if (k < arr.length){
                    str += `<tr>
                                <td><a href="${arr[k].officialWebsite}">${arr[k].schoolName}</a></td>
                                <td>${arr[k].schoolLocation}</td>
                                <td>${arr[k].schoolAffiliated}</td>
                                <td>${arr[k].schoolType}</td>
                                <td>${arr[k].educationLevel}</td>
                                <td><span style="float: left;margin-left: 5px;" class="schoolCharacteristics985">${arr[k].schoolCharacteristics985}</span> <span style="float: right;margin-right: 5px;" class="schoolCharacteristics211">${arr[k].schoolCharacteristics211}</span></td>
                                <td class="graduateSchool">${arr[k].graduateSchool}</td>
                                <td>${arr[k].satisfaction}</td>
                                <td>
                                    <a href="#" id="del">删除</a> | <a href="#" id="updata">修改</a>
                                </td>
                            </tr>`;
                }

            }

            $("#nr").html(str);//加到页面上
            one(".schoolCharacteristics985");
            one(".schoolCharacteristics211");
            one(".graduateSchool");
            function one(one){
                $(one).each(function (index,item) {
                    if($(this).html() == "no"){
                        $(this).html("");
                    }
                    if($(this).html() == "yes"){
                        $(this).html("√");
                    }
                })
            }

            //页数
            total = Math.ceil(arr.length/4);
            var str1 = "";
            for (var i =1;i <= total;i ++){
                str1 += `<li>${i}</li>`;
            }
            $("#u").html(str1);
            $("#u li").eq(page - 1).addClass("active");
        }
    })

}

var url = "http://127.0.0.1/Volunteer_to_simulate/Admin_user/php/admin_school_selectAll.php";

Load(url);//加载数据


//查询信息

$("#query_btn1").click(function () {
    var finduname = $("#uname1").val();//获取查询的内容
    if (finduname == ""){
        return;
    }
    var url = "http://127.0.0.1/Volunteer_to_simulate/Admin_user/php/admin_school_selectone.php";
    Load(url,finduname);

    $("#u").click(function (e) {
        var e = e || event;
        var target = e.target || e.srcElement;
        if(target.nodeName == "LI"){
            page = target.innerHTML; // page
            Load(url,finduname);
        }
    })

    $("#left").click(function () {
        if(page == 1){
            page = 1;
        }else{
            page--;
        }
        Load(url,finduname);
    })

    $("#right").click(function () {
        if(page == total){
            page = total;
        }else{
            page++;
        }
        Load(url,finduname);
    })

})



$("#u").click(function () {
    var e = e || event;
    var target = e.target || e.srcElement;
    if(target.nodeName == "LI"){
        page = target.innerHTML; // page
        Load(url);
    }
})

$("#left").click(function () {
    if(page == 1){
        page = 1;
    }else{
        page--;
    }
    Load(url);
})

$("#right").click(function () {
    if(page == total){
        page = total;
    }else{
        page++;
    }
    Load(url);
})




//添加学校数据








