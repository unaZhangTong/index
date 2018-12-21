<?php
    header("content-type:text/html;charset=utf-8");
    $index = $_POST["index"];

    mysql_connect("127.0.0.1","root","root");
    mysql_select_db("login");
    mysql_query("set names utf8");
    if($index == 1){
        $sql = "select * from `Admin_user`";
    }else if($index == 2){
        $sql = "select * from `Customer_service_user`";
    }else if($index == 3){
        $sql = "select * from `Admin_user` where uname='$val'";
    }
    $res = mysql_query($sql);
    while($data = mysql_fetch_assoc($res)){
        $arr[] = $data;
    }
    $data = json_encode($arr);
    print_r($data);

?>