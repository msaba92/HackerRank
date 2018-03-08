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



function plusMinus(arr) {
    var pos = 0;
    var neg = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            pos += 1;
        } else if (arr[i] < 0) {
            neg += 1;
        }
    }
    console.log(pos / arr.length);
    console.log(neg / arr.length);
    console.log((arr.length - (pos + neg)) / arr.length);
}



function main() {
    var n = parseInt(readLine());
    var arr = readLine().split(" ");
    arr = arr.map(Number);
    plusMinus(arr);
}
