// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

function divRangeChecker(range, number) {
    for (var i = 1; i < range + 1 ; i++) {
        if (number % i != 0) return false
    }
    return true
}

function divByAll(range) {
    var i = 1
    while (divRangeChecker(range,i)==false) {
      i++
    }
    return i
}
console.log(divByAll(20))

//
// Without actually trying it, I imagine that a few of the "brute force" methods here violate the "1 minute rule".  However, considering a minor change can greatly improve the efficiency of the algorithm.
//
// The "brute force" approach is assumed to be: iterate over each natural number - if the current is evenly divisible by each of the numbers 1 through 20, you've found your answer.
//
// Consider this: if you know that the solution for N is X, then the solution for N+1 must be divisible by X.  Therefore, when iterating through the natural numbers, you can iterate by X instead of 1.  And instead of checking for the divisibility of the numbers 1 to N+1, you only have to check for N+1, since you already know that the values (multiples of X) are all divisible by 1 to N.
//
// As an example, given that the answer for 10 is 2520, to get the solution of 11, we check if 2520 is evenly divisible by 11.  It isn't, we iterate to 5040 and check if that is divisible by 11.  We continue until we discover that 27720 is divisible by 11, which is out answer.
//
// Despite making no attempt to directly determine LCDs, this ends up being a fairly speedy algorithm, running easily under a second for somewhat larger values of N.
//
// In Ruby (though a similar approach can be used in many high-level languages):
//
// def snd(max)
//   result = 1
//   for n in 1..max
//     prev = result
//     while result % n > 0
//       result += prev
//     end
//   end
//   return result
// end
//
// puts snd(20)
