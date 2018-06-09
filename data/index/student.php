<?php
require_once("../init.php");
$sql = "select * from student_index_img";
$result = mysqli_query($conn,$sql);
echo json_encode(mysqli_fetch_all($result,1));