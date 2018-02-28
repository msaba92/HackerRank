<?php

$handle = fopen ("php://stdin", "r");

function solve($a, $b){
    $total = array_fill(0, 2, 0);
    echo count($total) . "\n";
    for ($x = 0; $x < count($a); $x++) {
        if ($a[$x] > $b[$x]) {
            $total[0] += 1;
        } elseif ($a[$x] < $b[$x]) {
            $total[1] += 1;
        }
    }
    return $total;
}

fscanf($handle, "%d %d %d", $a0, $a1, $a2);
fscanf($handle, "%d %d %d", $b0, $b1, $b2);
$a = array($a0, $a1, $a2);
$b = array($b0, $b1, $b2);
$result = solve($a, $b);
echo implode(" ", $result)."\n";

?>
