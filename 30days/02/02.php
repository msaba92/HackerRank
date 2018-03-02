<?php

$handle = fopen ("php://stdin", "r");
fscanf($handle, "%lf",$meal_cost);
fscanf($handle, "%i",$tip_percent);
fscanf($handle, "%i",$tax_percent);

$total = $meal_cost * (1 + ($tip_percent + $tax_percent) / 100);

echo "The total meal cost is " . floor($total + 0.5) . " dollars."

?>
