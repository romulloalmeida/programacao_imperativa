// Questão extra mostrar os multiplos de 8 até 500

const numero = 8;
const total = 500;

console.log(`Esses são os multiplos de ${numero} até ${total}`)
for(i=0;i<total;i++){
    if(i%8==0){
        console.log(i);
    }
}