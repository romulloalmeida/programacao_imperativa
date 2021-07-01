// Exercício de calculo fatorial

// Loop for
function factotial(i){
    n=1
    for(i;i>0;i--){
        n=n*i;
    }
    return n;
}

console.log(factotial(6));

// Recursividade
function fatorial(i){
    if(i==0){
        i=(i+1)*(i+1);
    }
    else{
        i=i*fatorial(i-1);
    }
    return i;
}

console.log(fatorial(6))