<?php

$handle = fopen ("php://stdin", "r");
function diagonalDifference($a) {
    $sum_from_left = 0;
    $sum_from_right = 0;
    $mysize = count($a);

    for ($i = 0; $i < $mysize; $i++) {
        $sum_from_left += $a[$i][0+$i];
        $sum_from_right += $a[$i][$mysize - ($i + 1)];
    }
    $total = $sum_from_left - $sum_from_right;
    return abs($total);
}

fscanf($handle, "%i",$n);
$a = array();
for($a_i = 0; $a_i < $n; $a_i++) {
   $a_temp = fgets($handle);
   $a[] = explode(" ",$a_temp);
   $a[$a_i] = array_map('intval', $a[$a_i]);
}
$result = diagonalDifference($a);
echo $result . "\n";

?>
