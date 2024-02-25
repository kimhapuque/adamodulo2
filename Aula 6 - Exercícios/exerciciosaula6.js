// Exercício 1 - Aula 6

let soma = 0;

for (let i = 1; i <= 10; i++) {
    soma += i;
}

console.log("A soma de todos os números de 1 a 10 é:", soma);



// Exercício 2 - Aula 6

let pessoa22 = {
    nome: "João",
    idade: 30,
    cidade: "São Paulo"
};

for (let propriedade in pessoa22) {
    console.log(`${propriedade}: ${pessoa22[propriedade]}`);
}



// Exercício 3 - Aula 6

let frutas22 = ["Maçã", "Banana", "Morango", "Abacaxi", "Uva"];

for (let frutass of frutas22) {
    console.log(frutass);
}



// Exercício 4 - Aula 6

const numero = 8;

console.log(`Tabuada de ${numero}:`);

for (let i = 1; i <= 10; i++) {
    const resultado = numero * i;
    console.log(`${numero} X ${i} = ${resultado}`);
}



// Exercício 5 - Aula 6

let valores5 = { valor1: 10, valor2: 20, valor3: 30, valor4: 40 };
let soma5 = 0;

for (let propriedade5 in valores5) {
    soma5 += valores5[propriedade5];
}

console.log("A soma dos valores é:", soma5);



// Exercício 6 - Aula 6

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numeroQEuQuero = 25;
let achei = false;

for (let i = 0; i < array.length; i++) {
    if (array[i] === numeroQEuQuero) {
        achei = true;
        break;
    }
}

if (achei) {
    console.log(`Achei o número ${numeroQEuQuero}`);
} else {
    console.log(`O número ${numeroQEuQuero} não ta aqui não`);
}



// Exercício 7 - Aula 6

function sequenciaFibonacci(N) {  // odiei esse exercicio
    const fibonacci = [1, 1];
    let i = 2;
    while (i < N) {
        const proximoNumero = fibonacci[i - 1] + fibonacci[i - 2];
        fibonacci.push(proximoNumero);
        i++;
    }
    return fibonacci.slice(0, N);
}

console.log(sequenciaFibonacci(6));
console.log(sequenciaFibonacci(14));




// Exercício 8 - Aula 6

const palavra1 = prompt("Digite uma palavra:").toLowerCase();
let contadorVogais = 0;

for (let i = 0; i < palavra1.length; i++) {
    const letra = palavra1[i];
    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
        contadorVogais++;
    }
}

console.log(`A "${palavra1}" tem ${contadorVogais} vogais.`);




// Exercício 9 - Aula 6

const novoArray = [1, 7, 2, 8, 3, 4, 5, 0, 9];  // esse foi pior ainda

function ordenarArray(array) {
    const ordenado = [];
    const len = array.length;
    for (let i = 0; i < len; i++) {
        const menor = Math.min(...array);
        const indice = array.indexOf(menor);
        ordenado.push(menor);
        array.splice(indice, 1);
    }
    return ordenado;
}

console.log(ordenarArray(novoArray));