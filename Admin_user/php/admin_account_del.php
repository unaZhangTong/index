<?php
    header("content-type:text/html;charset=utf-8");
    $id = $_POST["id"];

    mysql_connect("127.0.0.1","root","root") or die("数据库连接失败");
    mysql_select_db("login");
    mysql_query("set names utf8");

    $sql = "delete from `register` where id=$id";

    $res = mysql_query($sql);
    if($res){//删除成功
        echo 1;
    }
