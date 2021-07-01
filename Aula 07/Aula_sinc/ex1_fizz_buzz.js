// Exercício fizzbuzz 18/06/21

const double = "FizzBuzz";
const first = "Fizz";
const second = "Buzz";

function fizzBuzz(a,b){
    for(i=1;i<100;i++){
        if(i%a==0 & i%b==0){
            console.log(double);
        }
        if(i%a==0){
            console.log(first);
        }
        if(i%b==0){
            console.log(second);
        }
        if(i%a!=0 & i%b!=0){
            console.log(i);
        }
    }
}

fizzBuzz(2,9);