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

function solve(a, b) {
    var total = [0, 0];
    for (var i = 0; i < a.length; i++) {
        if (parseInt(a[i]) > parseInt(b[i])) {
            total[0] += 1;
        } else if (parseInt(a[i]) < parseInt(b[i])) {
            total[1] += 1;
        }
    }
    return total;
}

function main() {
    var a = readLine().split(" ");
    var b = readLine().split(" ");
    var result = solve(a, b);
    console.log(result.join(" "));
}
