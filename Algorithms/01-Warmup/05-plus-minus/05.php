<?php

$handle = fopen ("php://stdin", "r");
function plusMinus($arr) {
    $pos = 0;
    $neg = 0;

    foreach($arr as $i) {
        if ($i > 0) {
            $pos += 1;
        } else if ($i < 0) {
            $neg += 1;
        }
    }
    echo $pos / count($arr) . "\n";
    echo $neg / count($arr) . "\n";
    echo (count($arr) - ($pos + $neg)) / count($arr) . "\n";
}

fscanf($handle, "%i",$n);
$arr_temp = fgets($handle);
$arr = explode(" ",$arr_temp);
$arr = array_map('intval', $arr);
plusMinus($arr);

?>
