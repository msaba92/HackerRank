<?php

class person {
    protected $firstName, $lastName, $id;
    public function __construct($first_name, $last_name, $identification) {
        $this->firstName = $first_name;
        $this->lastName = $last_name;
        $this->id = $identification;
    }
    function printPerson() {
        print("Name: {$this->lastName}, {$this->firstName}\n");
        print("ID: {$this->id}\n");
    }
}

class Student extends person {
    private $testScores;
    public function __construct($first_name, $last_name, $identification, $scores) {
        parent::__construct($first_name, $last_name, $identification);
        $this->testScores = $scores;
    }

    public function calculate() {
        $grade_tot = 0;
        for ($i = 0; $i < count($this->testScores); $i++) {
            $grade_tot += $this->testScores[$i];
        }

        $result = $grade_tot / count($this->testScores);

        if ($result >= 90) {
            return "O";
        } else if ($result >= 80) {
            return "E";
        } else if ($result >= 70) {
            return "A";
        } else if ($result >= 55) {
            return "P";
        } else if ($result >= 40) {
            return "D";
        } else {
            return "T";
        }
    }
}

$file = fopen("php://stdin", "r");

$name_id = explode(' ', fgets($file));

$first_name = $name_id[0];
$last_name = $name_id[1];
$id = (int)$name_id[2];

fgets($file);

$scores = array_map(intval, explode(' ', fgets($file)));

$student = new Student($first_name, $last_name, $id, $scores);

$student->printPerson();

print("Grade: {$student->calculate()}");
