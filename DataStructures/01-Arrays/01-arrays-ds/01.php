<?php

$handle = fopen ("php://stdin","r");
fscanf($handle,"%d",$n);
$arr_temp = fgets($handle);
$arr = explode(" ",$arr_temp);
array_walk($arr,'intval');

$toprint = implode(" ", array_reverse($arr));
echo str_replace("\n","",$toprint);

?>
