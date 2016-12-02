var input = `4 8
1536 78360
51478 5536
46410 119340
7673 4729
4096 1024`

var inputArr = input.split('\n');

for (var i = 0; i < inputArr.length; i++) {
	var result = [];
    var fraction = inputArr[i].split(" ");
    var numerator = fraction[0];
    var denominator = fraction[1];
    var numeratorDivisors = getDivisors(numerator);
    var denominatorDivisors = getDivisors(denominator);
    var greatestCommonDivisor = getGreatestCommonDivisor(numeratorDivisors, denominatorDivisors);

    result.push(numerator/greatestCommonDivisor, denominator/greatestCommonDivisor)
    console.log(result);
}

function getDivisors(num) {
    var divisorsList = [];
    for (var i = 1; i <= num; i++) {
        if (num % i == 0) {
            divisorsList.push(i);
        }
    }
    return divisorsList;
}

function getGreatestCommonDivisor(numArr, denomArr) {
    var commonDivisors = [];
    for (var i = 0; i < numArr.length; i++) {
        if (denomArr.indexOf(numArr[i]) > -1) {
            commonDivisors.push(numArr[i]);
        }
    }
    return commonDivisors[commonDivisors.length - 1];
}
