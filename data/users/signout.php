<?php
//data/users/signout.php注销
session_start();
session_unset();
session_destroy();