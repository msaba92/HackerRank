<?php

$handle = fopen ("php://stdin","r");
fscanf($handle,"%d",$n);

$binary = decbin($n);

$ones = 0;
$target = 0;

for ($i = 0; $i < strlen($binary); $i++) {
    if ($binary[$i] == "1") {
        $ones +=1;
        if ($ones > $target) {
            $target = $ones;
        }
    } else {
        $ones = 0;
    }
}

echo $target;
?>

