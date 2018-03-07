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



function diagonalDifference(a) {
    var sum_from_left = 0;
    var sum_from_right = 0;
    var mysize = a.length;

    for (var i = 0; i < mysize; i++) {
        sum_from_left += a[i][0 + i];
        sum_from_right += a[i][mysize - (i + 1)];
    }

    var total = Math.abs(sum_from_left - sum_from_right);
    return total;
}



function main() {
    var n = parseInt(readLine());
    var a = [];
    for(var a_i = 0; a_i < n; a_i++){
        a[a_i] = readLine().split(" ");
        a[a_i] = a[a_i].map(Number);
    }
    var result = diagonalDifference(a);
    process.stdout.write("" + result + "\n");

}
