<?php
    header("content-type:text/html;charset=utf-8");


    mysql_connect("127.0.0.1","root","root");
    mysql_select_db("login");
    mysql_query("set names utf8");
    $sql = "select * from `register`";
    $res = mysql_query($sql);

    while($data = mysql_fetch_assoc($res)){
        $arr[] = $data;
    }
    $data = json_encode($arr);
    print_r($data);

?>