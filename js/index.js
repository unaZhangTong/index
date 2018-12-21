


//轮播图
var index = 0;//当前页下标
var timer = null;
var page = $("#banner_ol li");
var list = $("#banner_ul li");
timer = setInterval(autoPlay,2000);
function autoPlay() {
    index ++;
    if (index == page.length){
        index = 0;
    }

    list.eq(index).fadeIn(100).siblings().fadeOut(100);
    page.eq(index).addClass("current").siblings().removeClass("current");
    // console.log(index);
}
page.mouseenter(function () {
    clearInterval(timer);
    index = $(this).index() - 1;
    autoPlay();
})
page.mouseleave(function () {
    timer = setInterval(autoPlay,2000);
})

list.mouseenter(function () {
    clearInterval(timer);
})
list.mouseout(function () {
    timer = setInterval(autoPlay,2000);
})



//文章调用

function articleAjax(type,obj) {
    $.ajax({
        type : "post",
        url : "http://127.0.0.1/Volunteer_to_simulate/php/index_article_select.php",
        async : true,
        data : {
            type : type
        },
        success : function (msg) {
            // console.log(typeof msg);
            var arr = JSON.parse(msg);
            var str = "";
            for (var i = 0;i < arr.length;i ++){
                str += `<li><a href="http://127.0.0.1/Volunteer_to_simulate/html/acrtile.html?title=${arr[i].title}" target="_blank">${arr[i].title}</a></li>`;
            }
            $(obj).append(str);
        }
    })
}

articleAjax(1,"#left_article");
articleAjax(2,"#right_article");


