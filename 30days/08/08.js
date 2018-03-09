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

function hasMore() {
    if (input_currentline < input_stdin_array.length) {
        return true;
    } else {
        return false;
    }
}

function main() {
    var n = parseInt(readLine());
    var mylist = {};
    for (var i = 0; i < n; i++) {
        var arr = readLine().split(" ");
        mylist[arr[0]] = arr[1];
    }
    while (hasMore()) {
        var key = readLine();
        if (key in mylist) {
            console.log(key + "=" + mylist[key]);
        } else {
            console.log("Not found");
        }
    }
}
