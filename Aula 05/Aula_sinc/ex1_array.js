// Exercício praticando com array

// Declarando arrays

let lista=["gelo","água","vapor"];
let pilha=["fogo","magma","cinzas"];

// Acessando elementos específicos dos arrays
console.log(`${lista[0]} é o elemento 0 do array `);
console.log(`${lista[1]} é o elemento 1 do array `);
console.log(`${lista[2]} é o elemento 2 do array `);
console.log(`${pilha[0]} é o elemento 0 do array `);
console.log(`${pilha[1]} é o elemento 1 do array `);
console.log(`${pilha[2]} é o elemento 2 do array `);

// Comparando arrays
if(lista==pilha){
    console.log("Arrays iguais");
}
else{
    console.log("Arrays diferentes");
}

// Adicionando Elementos
lista.push("Cristais");
console.log(lista);
pilha.unshift("Cerâmica");
console.log(pilha);

// Removendo Elementos
lista.pop();
console.log(lista);
pilha.shift();
console.log(pilha);