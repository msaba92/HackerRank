function processData(input) {
    var array = input.split("\n")
    for (var i = 0; i < parseInt(array[0]); i++) {
        var mystring = array[i + 1];
        var even = "";
        var odd = "";

        for (var j = 0; j < mystring.length; j++) {
            if (j % 2 === 0) {
                even += mystring[j];
            } else {
                odd += mystring[j];
            }
        }
        console.log(even + " " + odd);
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

