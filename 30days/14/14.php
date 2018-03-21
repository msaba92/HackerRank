<?php
    class Difference{
    private $elements=array();
    public $maximumDifference;

    public function __construct($a) {
        $this->elements = $a;
    }

    public function ComputeDifference() {
        $this->maximumDifference = max($this->elements) - min($this->elements);
    }

} //End of Difference class

$N=intval(fgets(STDIN));
$a =array_map('intval', explode(' ', fgets(STDIN)));
$d=new Difference($a);
$d->ComputeDifference();
print ($d->maximumDifference);
?>
