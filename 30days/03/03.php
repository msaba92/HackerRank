<?php

$handle = fopen ("php://stdin","r");
fscanf($handle,"%d",$N);

if ($N % 2 == 0) {
    if ($N >= 6 && $N <= 20) {
        echo "Weird";
    } else {
        echo "Not Weird";
    }
} else {
    echo "Weird";
}

?>
