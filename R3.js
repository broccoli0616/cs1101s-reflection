const z = 1; 
function f(g) {
    const z = 3;
    return g(z);
}

f(y => y + z);




