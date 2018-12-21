<?php
    header("content-type:text/html;charset=utf-8");
    $title = $_POST["title"];
    $author = $_POST["author"];
    $time = $_POST["time"];
    $content = $_POST["content"];
    $type = $_POST["type"];

    mysql_connect("127.0.0.1","root","root");
    mysql_select_db("announcement");
    mysql_query("set names utf8");
    $sql = "select * from `article` where title='$title'";
    $res = mysql_query($sql);
    $arr = mysql_fetch_assoc($res);
    if($arr){//如果有该用户，不能注册
        echo 0;
    }
    else{//如果没有该用户，可以注册
        $sql = "insert into `article` (title,author,time,content,type) VALUES ('$title','$author','$time','$content','$type')";
        $res = mysql_query($sql);

        if($res){//注册成功
            echo 1;
        }else{//注册失败
            echo 2;
        }
    }
?>