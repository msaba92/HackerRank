<?php
$_fp = fopen("php://stdin", "r");
fscanf($_fp, "%d", $n);

for ($i = 0; $i < $n; $i++) {
    fscanf($_fp, "%s", $mystring);
    $even = "";
    $odd = "";
    for ($j = 0; $j < strlen($mystring); $j++) {
        if ($j % 2 == 0) {
            $even .= substr($mystring, $j, 1);
        } else {
            $odd .= substr($mystring, $j, 1);
        }
    }
    echo $even . " " . $odd . "\n";
}

?>
