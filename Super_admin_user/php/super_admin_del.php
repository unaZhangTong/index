<?php
    header("content-type:text/html;charset=utf-8");
    $id = $_POST["id"];
    $index = $_POST["index"];

    mysql_connect("127.0.0.1","root","root") or die("数据库连接失败");
    mysql_select_db("login");
    mysql_query("set names utf8");
    if($index == 1){
        $sql = "delete from `Admin_user` where id=$id";
    }else if($index == 2){
        $sql = "delete from `Customer_service_user` where id=$id";
    }

    $res = mysql_query($sql);
    if($res){//删除成功
        echo 1;
    }
