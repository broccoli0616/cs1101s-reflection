/*function factorial(n){
    return n === 1
           ? 1 
           : n * factorial(n - 1);
}

factorial(5);*/

/*function factorial(n){
    return iter(1, 1, n);
}

function iter(product, counter, n){
    return counter > n
    ?product 
    : iter(counter * product, counter + 1, n);
}

factorial(5);*/

 function fib(n) {
     return fib_iter(1, 0, n);
 }
 function fib_iter(a, b, count){
     return count === 0
            ? b
            : fib_iter(a + b, a, count - 1);
 }
 
fib(5);