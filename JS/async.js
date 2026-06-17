function square(n){
    return n*n;
}

function cube(n){
    return n*n*n;
}

function sumofsomething(a,b,fn){
    let value1 = fn(a);
    let value2 = fn(b);

    return value1+value2;
}

console.log(sumofsomething(1,2,cube))