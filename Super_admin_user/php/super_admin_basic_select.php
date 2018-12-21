<?php
    header("content-type:text/html;charset=utf-8");
    $uname = $_POST["uname"];

    mysql_connect("127.0.0.1","root","root");
    mysql_select_db("login");
    mysql_query("set names utf8");
    $sql = "select * from `Super_admin_user` where uname='$uname'";

    $res = mysql_query($sql);

    $data = mysql_fetch_assoc($res);
    if($data){
        $arr[] = $data;
        $data = json_encode($arr);
        print_r($data);
    }else{
        echo 0;
    }

?>