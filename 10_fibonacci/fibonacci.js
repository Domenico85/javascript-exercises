function fibonacci(n) {

    if (typeof n === 'string') {
        n = parseInt(n);
    }
    
    if (typeof n !== 'number' || isNaN(n) || n < 0) {
        return "OOPS";
    }
    
    if (n === 0) {
        return 0;
    } else if (n === 1 || n === 2) {
        return 1;
    } else {
        let prev1 = 1;
        let prev2 = 1;
        let fib = 0;
        
        for (let i = 3; i <= n; i++) {
            fib = prev1 + prev2;
            prev1 = prev2;
            prev2 = fib;
        }
        
        return fib;
    }
}

module.exports = fibonacci;


// Do not edit below this line
module.exports = fibonacci;
