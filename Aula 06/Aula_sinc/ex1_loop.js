// Microdesafio Array 15/06

// Questão 1
const pontos=[12,34,56,34,5,8,76,4,1,90];
// Percorrendo array
for(i=0;i<pontos.length;i++){
    console.log(pontos[i]);
}

// Questão 2
let lista=[1,3,4,6,7,7,8,9];
// Brincando com o array lista
for(i=0;i<lista.length;i++){
    if(lista[i]%2!=0){
        console.log(lista[i]*2);
    }
    else{
        console.log(lista[i]);
    }
}

// Questão 3
let fila=[0,1,2,3,5,7,9,15]
// Zuando com o array fila
for(i=0;i<fila.length;i++){
    if(fila[i]%3!=0){
        fila[i] = fila[i]+2;
    }
    else{
        fila[i] = fila[i]-3;
    }
}

console.log(fila);

// Questão 4
let conjunto=[1,10,20,25,30]
// Trolando o array conjunto
for(i=0;i<conjunto.length;i++){
    if(conjunto[i]%10==0){
        conjunto[i] = conjunto[i]/10;
    }
    else{
        conjunto[i] = conjunto[i]+10;
    }
}

console.log(conjunto);