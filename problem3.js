function isitprime(num) {
    var div = 2
    while (div * div <= num) {
        if (num % div != 0) {
            div++
        } else return false
    }
    return true
}


function primelistgenerator(limit) {
    var n = 2
    var list = []
    while (n < limit) {
        if (isitprime(n) == true) {
            list.push(n)
        }
        div++
    }
    return list
}


function nextprime(n) {
    do n++
        while (isitprime(n) == false);
    return n
}





function letsfactorize(n) {
    var primefactor = 2;
    var listOfFactors = [];
    while (n > 1) {
        if (n % primefactor == 0) {
            listOfFactors.push(primefactor);
            n /= primefactor
        } else {
            primefactor = nextprime(primefactor)
        }

    }
    return listOfFactors
}


console.log(letsfactorize(600851475143))
