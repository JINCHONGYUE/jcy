<?php
require_once("../init.php");
$sql = "select * from environment_index_content";
$result = mysqli_query($conn,$sql);
echo json_encode(mysqli_fetch_all($result,1));