//Problem 6
//The sum of the squares of the first ten natural numbers is,
//	12 + 22 + ... + 102 = 385
//
//The square of the sum of the first ten natural numbers is,
//	(1 + 2 + ... + 10)2 = 552 = 3025
//
//Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
//
//	Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
//
//	Answer:
//

function sumOfSquares(x) {
  //this function iterates numbers from 1 to x, finds the square and then add the squares to sum, returning the total
  var sum = 0
  for (var i = 1; i <= x; i++) {
    var sq = i * i;
    sum += sq
  }
  return sum
}



function squareOfSum(x) {
	//this function adds numbers from 1 to x and then find the square of the sum
  var sum = 0;
  for (var i = 1; i <= x; i++) {
    sum += i;
  }
	return sum * sum
}

function sumSquareDifference(x){
	return squareOfSum(x) - sumOfSquares(x)
}

console.log(sumSquareDifference(100))
