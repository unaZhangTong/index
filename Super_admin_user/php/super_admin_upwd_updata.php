<?php
    header("content-type:text/html;charset=utf-8");
    $uname = $_POST["uname"];
    $upwd = $_POST["upwd"];

    mysql_connect("127.0.0.1","root","root");
        mysql_select_db("login");
        mysql_query("set names utf8");
        $sql = "update `Super_admin_user` set upwd='$upwd' where uname='$uname'";
        $res = mysql_query($sql);

        if($res){//修改成功
            echo 1;
        }
        else{//修改失败
            echo 0;
        }
?>