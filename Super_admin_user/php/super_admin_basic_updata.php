<?php
    header("content-type:text/html;charset=utf-8");
    $uname = $_POST["uname"];
    $userName = $_POST["userName"];
    $sex = $_POST["sex"];
    $age = $_POST["age"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $department = $_POST["department"];
    $position = $_POST["position"];

    mysql_connect("127.0.0.1","root","root");
        mysql_select_db("login");
        mysql_query("set names utf8");
        $sql = "update `Super_admin_user` set userName='$userName',sex='$sex',age='$age',email='$email',phone='$phone',department='$department',position='$position' where uname='$uname'";
        $res = mysql_query($sql);

        if($res){//修改成功
            echo 1;
        }
        else{//修改失败
            echo 0;
        }
?>