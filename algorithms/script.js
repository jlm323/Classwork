// 0(n) linear time
function addUpTo(n) {
    let total = 0;
    for (let i = 0; i <= n; i++) {
        total += i;
    }
    return total;
}

// 0(1) constant time
function addUpTo2(n) {
    return n * (n + 1) / 2
}

// which is considered better?
//      whichever one is faster
//      memory usage
//      readability

// Big O
// describes complexity of code, analyses the performance of an algorithm (aka a function)
    // how long a function will take to execute (execution time)
    // how much space (in memory or disk) the function takes up as input in the function grows larger

// 0(1) - flat line. it is constant no matter the input
// 0(n) - goes up and right in straight line. increases in linear fashion


// 5n^3     0(n^3)

// 0(1) constant time
// no matter how big input, computer will do same amt of work to perform the algorithm on them

const addAll = numArray => {
    let sum = 1;
    for (let i = 0; i < numArray.length; i++) {
        sum += numArray[i];
    }
}


