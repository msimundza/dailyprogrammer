var solutions = [];

for (var i = 2; i <= 50; i++) {
    var square = Math.pow(i, 2).toString();
    var squareLength = square.length;
    if (squareLength >= 2) {
        for (var j = 0; j < squareLength - 1; j++) {
        	var firstPart = parseInt(square.substring(0, j + 1));
        	var secondPart = parseInt(square.substring(j + 1, squareLength));
            if (secondPart != 0 && (firstPart + secondPart == i)) {
                solutions.push(firstPart + secondPart);
            }
        }
    }
}

console.log(solutions);