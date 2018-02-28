<?php

$handle = fopen ("php://stdin", "r");
function simpleArraySum($ar) {
    $total = 0;
    foreach($ar as $number) {
        $total += $number;
    }
    return $total;
}

fscanf($handle, "%i",$n);
$ar_temp = fgets($handle);
$ar = explode(" ",$ar_temp);
$ar = array_map('intval', $ar);
$result = simpleArraySum($ar);
echo $result . "\n";

?>
