process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function miniMaxSum(arr) {
    var higher = 0;
    var lower = 0;

    for (var i = 0; i < arr.length; i++) {
        var sum = 0;
        for (var j = 0; j < arr.length; j++) {
            if (j != i) {
                sum += arr[j];
            }
        }
        if (i === 0) {
            lower = sum;
        } else {
            if (lower > sum) {
                lower = sum;
            }
        }
        if (sum > higher) {
            higher = sum;
        }
    }
    console.log(lower + " " + higher);
}

function main() {
    var arr = readLine().split(' ');
    arr = arr.map(Number);
    miniMaxSum(arr);

}
