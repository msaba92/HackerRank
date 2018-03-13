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

function main() {
    var arr = [];
    for(var arr_i = 0; arr_i < 6; arr_i++){
        arr[arr_i] = readLine().split(" ");
        arr[arr_i] = arr[arr_i].map(Number);
    }

    var max;
    var total = 0;

    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            total = arr[i][j] + arr[i][j+1] + arr[i][j+2];
            total += arr[i+1][j+1];
            total += arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
            if (max === undefined || total > max) {
                max = total;
            }
        }
    }
    console.log(max);
}
