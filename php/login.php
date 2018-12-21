<?php
    header("content-type:text/html;charset=utf-8");
    $uname = $_POST["uname"];
    $upwd = $_POST["upwd"];
    $optionVal = $_POST["optionVal"];

    mysql_connect("127.0.0.1","root","root");
    mysql_select_db("login");
    mysql_query("set names utf8");
    if ($optionVal == 1){
        $sql = "select * from `register` where uname='$uname'";
    } else if ($optionVal == 2){
        $sql = "select * from `Admin_user` where uname='$uname'";
    } else if ($optionVal == 3){
        $sql = "select * from `Customer_service_user` where uname='$uname'";
    } else if ($optionVal == 4){
        $sql = "select * from `Super_admin_user` where uname='$uname'";
    }
    $res = mysql_query($sql);
    $arr = mysql_fetch_assoc($res);
    if($arr){//如果有该用户，登录成功
        if ($upwd == $arr["upwd"]){//判断密码一致//登录成功
            echo $uname;
        }else{//登录失败
            echo 2;
        }
    }
    else{//没有该用户
        echo 0;
    }
?>