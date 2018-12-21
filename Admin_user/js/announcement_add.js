
//发布，添加到数据库
$("#put_btn").click(function () {

    var title = $("#title").val();
    var author = $("#author").val();
    var time = $("#time").val();
    var content = $("#up_content").val();
    var type = $("#article_type").val();
    console.log(type);

    if (title == "" || author == "" || time =="" || content == ""){
        alert("内容不能为空，请填写完整");
        return ;
    }


    //取出当前url
    var url = location.href;//取出当前页面的url
    var res = addres(url);//将url传参的数据，以对象的形式展示出来
//console.log(res); //{id: "6", uname: "546@qq.com", upwd: "11111111qq"}
    var uname1 = decodeURI(res.uname);//把uname解码


    $.ajax({
        type : "post",
        url : "http://127.0.0.1/Volunteer_to_simulate/Admin_user/php/announcement_add.php",
        async : true,
        data: {
            title : title,
            author : author,
            time : time,
            content : content,
            type : type
        },
        success : function (msg) {

            // console.log(msg);
            if(msg == 0){
                alert("该文章标题已存在");
                return;
            }else if (msg == 1) {
                alert("发布成功");
                /*setTimeout(function () {
                    location.href = "http://127.0.0.1/Volunteer_to_simulate/Admin_user/announcement.html?uname="+uname1;
                },1000)*/
            }else {
                alert("发布失败");
                return;
            }
        }
    })
})



//取消，返回主页

