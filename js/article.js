//获取当前页面的url，获取用户名
var url = location.href;
var res = addres(url);//将url传参的数据以对象的形式展示出来-public函数addres
var title = decodeURI(res.title);//把uname解码
console.log(title);
console.log(typeof title);
$.ajax({
    type : "post",
    url : "http://127.0.0.1/Volunteer_to_simulate/php/article_select.php",
    async : true,
    data : {
        title : title
    },
    success : function (msg) {
        var arr = JSON.parse(msg);
        console.log(arr);
        console.log(typeof arr);
        var str = "";
        str += `<ul>
                    <li><a href="">${arr[0].title}</a></li>
                </ul>
                <p><span>${arr[0].time}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>${arr[0].author}</span></p>
                <div id="article_content">${arr[0].content}</div>`;
        $("#nav_main").append(str);
    }
})