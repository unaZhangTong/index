<?php
    header("content-type:text/html;charset=utf-8");
    $id = $_POST["id"];
    $uname = $_POST["uname"];
    $upwd = $_POST["upwd"];

    mysql_connect("127.0.0.1","root","root");
    mysql_select_db("login");
    mysql_query("set names utf8");
    $sql = "update `Admin_user` set upwd='$upwd' where id=$id";
    $res = mysql_query($sql);

    if($res){//修改成功
        echo 1;
    }
    else{//修改失败
        echo 0;
    }
?>