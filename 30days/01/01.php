<?php
$handle = fopen ("php://stdin","r");
$i = 4;
$d = 4.0;
$s = "HackerRank ";

fscanf($handle,"%d",$j);
fscanf($handle,"%f",$e);
fscanf($handle,"%[^\n]",$t);

echo $i + $j . "\n";
echo number_format($d + $e, 1) . "\n";
echo $s . $t;

fclose($handle);
?>
