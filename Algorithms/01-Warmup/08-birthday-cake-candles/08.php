<?php

$handle = fopen ("php://stdin", "r");
function birthdayCakeCandles($n, $ar) {
    $max = 0;
    $count = 0;
    for ($i = 0; $i < $n; $i++) {
        if ($ar[$i] > $max) {
            $count = 0;
            $max = $ar[$i];
        }
        if ($ar[$i] == $max) {
            $count += 1;
        }
    }
    return $count;
}

fscanf($handle, "%i",$n);
$ar_temp = fgets($handle);
$ar = explode(" ",$ar_temp);
$ar = array_map('intval', $ar);
$result = birthdayCakeCandles($n, $ar);
echo $result . "\n";

?>
