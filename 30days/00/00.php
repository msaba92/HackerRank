<?php
$_fp = fopen("php://stdin", "r");

$inputString = fgets($_fp); // get a line of input from stdin and save it to our variable

print("Hello, World.\n");

print $inputString;

fclose($_fp);
?>
