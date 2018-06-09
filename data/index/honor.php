<?php
require_once("../init.php");
$sql = "select * from honor_index_img limit 0,6";
$result = mysqli_query($conn,$sql);
echo json_encode(mysqli_fetch_all($result,1));