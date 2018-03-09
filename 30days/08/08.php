<?php
$_fp = fopen("php://stdin", "r");
fscanf($_fp,"%d",$n);

$mylist = array();

for ($i = 0; $i < $n; $i++) {
    fscanf($_fp,"%[^\n]",$key);
    $arr = explode(" ", $key);
    $mylist[$arr[0]] = $arr[1];
}

while (($key = fgets($_fp)) !== false) {
    $key = str_replace("\n", "", $key);
    if (array_key_exists($key, $mylist)) {
        echo $key . "=" . $mylist[$key] . "\n";
    } else {
        echo "Not found\n";
    }
}

?>
