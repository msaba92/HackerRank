#!/usr/bin/env node
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

function simpleArraySum(ar) {
    var result = 0;
    for (var x = 0; x < ar.length; x++) {
        result += ar[x];
    }
    return result;
}

function main() {
    var n = parseInt(readLine());
    var ar = readLine().split(" ");
    ar = ar.map(Number);
    var result = simpleArraySum(ar);
    process.stdout.write("" + result + "\n");

}

