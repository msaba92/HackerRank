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

function birthdayCakeCandles(n, ar) {
    var max = 0;
    var count = 0;
    for (var i = 0; i < n; i++) {
        if (ar[i] > max) {
            count = 0;
            max = ar[i];
        }
        if (ar[i] == max) {
            count += 1;
        }
    }
    return count;
}

function main() {
    var n = parseInt(readLine());
    var ar = readLine().split(" ");
    ar = ar.map(Number);
    var result = birthdayCakeCandles(n, ar);
    process.stdout.write("" + result + "\n");

}

