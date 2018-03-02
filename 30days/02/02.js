"use strict";

var _input = "";
var _index = 0;
process.stdin.on("data", (data) => { _input += data; });
process.stdin.on("end", () => {
    _input = _input.split(new RegExp("[\n ]+"));
    main(+(_input[0]), +(_input[1]), +(_input[2]));
});

function main(mealCost, tipPercent, taxPercent) {

    process.stdin.resume();
    process.stdin.setEncoding("ascii");

    var input_stdin = "";
    var input_stdin_array = "";
    var input_currentline = 0;

    process.stdin.on("data", function (data) {
        input_stdin += data;
    });

    process.stdin.on("end", function () {
        input_stdin_array = input_stdin.split("\n");
        main();    
    });

    function readLine() {
        return input_stdin_array[input_currentline++];
    }

    /////////////// ignore above this line ////////////////////

    (function main() {
        var meal_cost = readLine();
        var tip_percent = parseFloat(readLine());
        var tax_percent = parseFloat(readLine());
        console.log(meal_cost);

        var total = Math.round(meal_cost * (1 + (tip_percent + tax_percent)/100));

        console.log("The total meal cost is %f dollars" , total);

    })();
}
