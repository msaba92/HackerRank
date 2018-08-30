<?php
interface AdvancedArithmetic{
    public function divisorSum($n);
}

class Calculator implements AdvancedArithmetic {
    function divisorSum($n) {
        $total = $n;
        for ($i = 1; $i < $n/2 + 1; $i++) {
            if ($n % $i == 0 && $i != $n) {
                $total += $i;
            }
        }
        return $total;
    }
}


$n=intval(fgets(STDIN));
$myCalculator=new Calculator();
if($myCalculator instanceof AdvancedArithmetic)//checking if Calculator has implemented AdvancedArithemtic
{
    $sum=$myCalculator->divisorSum($n);
    echo "I implemented: AdvancedArithmetic\n".$sum;
}
else
{
    echo "Wrong answer";// You will get this output if you dont implement
}
?>
