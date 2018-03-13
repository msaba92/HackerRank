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
    var n = parseInt(readLine());
    
    var binary = n.toString(2);
    
    var ones = 0;
    var target = 0;
    
    for (var i = 0; i < binary.length; i++) {
        if (binary[i] == "1") {
            ones +=1;
            if (ones > target) {
                target = ones;
            }
        } else {
            ones = 0;
        }
    }
    
    console.log(target);
}
