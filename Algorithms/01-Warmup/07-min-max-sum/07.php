<?php

$handle = fopen ("php://stdin", "r");

function miniMaxSum($arr) {
    $lower = 0;
    $higher = 0;

    for($i = 0; $i < count($arr); $i++) {
        $sum = 0;
        for($j = 0; $j < count($arr); $j++) {
            if ($j != $i) {
                $sum += $arr[$j];
            }
        }
        if ($i === 0 || $lower > $sum) {
            $lower = $sum;
        }
        if ($sum > $higher) {
            $higher = $sum;
        }
    }
    echo $lower . " " . $higher;
}

$arr_temp = fgets($handle);
$arr = explode(" ",$arr_temp);
$arr = array_map('intval', $arr);
miniMaxSum($arr);

?>
