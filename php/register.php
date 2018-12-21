<?php
    header("content-type:text/html;charset=utf-8");
    $uname = $_POST["uname"];
    $upwd = $_POST["upwd"];

    mysql_connect("127.0.0.1","root","root");
    mysql_select_db("login");
    mysql_query("set names utf8");
    $sql = "select * from `register` where uname='$uname'";
    $res = mysql_query($sql);
    $arr = mysql_fetch_assoc($res);
    if($arr){//如果有该用户，不能注册
        echo 0;
    }
    else{//如果没有该用户，可以注册
        $sql = "insert into `register` (uname,upwd) VALUES ('$uname','$upwd')";
        $res = mysql_query($sql);

        if($res){//注册成功
            echo 1;
        }else{//注册失败
            echo 2;
        }
    }
?>