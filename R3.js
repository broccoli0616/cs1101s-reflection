/*const z = 1; 
function f(g) {
    const z = 3;
    return g(z);
}

f(y => y + z); */




/*write a function my_sum that computes the following sum, for n=>1, without
higher-order functions */
 
 /*function my_sum(n){
     return n < 1
     ? 0
     : n * (n + 1) + my_sum(n - 1);
 }
 
 my_sum(3);*/
 
 
 function sum(term, a, next, n){
     /* const a = 1; the const a will be fighted with the parameter a 
     as both of them are in one scope */
     return a  > n
     ? 0 
     : term(a) + sum(term, next(a), next, n);

 }
 
function my_sum(n){
    const a = 1;
     function identity(a){
         return a * (a + 1);
     }
     // the function name cannot be term/ next again 
     function plus_one(a){
         return a + 1;
     }
    return sum(identity, a, plus_one, n);
    
}

my_sum(1);
 
 
 
 
 
 
 
 