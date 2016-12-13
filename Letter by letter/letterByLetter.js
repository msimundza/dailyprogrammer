// var input1 = "floor";
// var input2 = "brake";

// var input1 = "wood";
// var input2 = "book";

var input1 = "a fall to the floor";
var input2 = "braking the door in";


function letterByLetter(input1, input2) {
    for (var i = 0; i < input2.length; i++) {
        if (input1.charAt(i) != input2.charAt(i)) {
            console.log(input2.slice(0, i) + input1.slice(i, input2.length));
        }
    }
    // if condition was i <= input2.length, in the last iteration both
    // input1.charAt(i) and input2.charAt(i) would be empty string which
    // resulted in last letter not being "substituted" therefor final console.log
    console.log(input2);
}

letterByLetter(input1, input2);
