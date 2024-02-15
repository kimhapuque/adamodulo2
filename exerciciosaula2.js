//Exercício 1 - Aula 2

let n1 = 5
let n2 = 10

const resultado = [n1 + n2, n1 - n2, n1 * n2, n1 / n2]

console.log (resultado[0])
console.log (resultado[1])
console.log (resultado[2])
console.log (resultado[3])

//Exercício 2 - Aula 2

let notas = [
    ['Astronomia', 10],
    ['Matemática', 2],
    ['Biologia', 8]
];

let somaNotas = (notas[0][1]) + (notas[1][1]) + (notas[2][1]);

let media = somaNotas / notas.length;

console.log ("A média das notas é: " + media);

//Exercício 3 - Aula 2

let matriz = [
    [8, 4],
    [5, 9]
];

let determinante = (matriz[0][0] * matriz[1][1]) - (matriz[0][1] * matriz[1][0]);

console.log ("Valor da determinante da matriz: " + determinante);

//Exercício 4 - Aula 2

let coordX = [4, 5, 7]
let coordY = [9, 3, 4]
let result = 0

result = (coordX[0] * coordY[0]) + (coordX[1] * coordY[1]) + (coordX[2] * coordY[2])

console.log (result)

//Exercício 5 - Aula 2

const numeros = [3, 8, 15, 21, 30, 37, 42];

numeros.splice(0, 1)
numeros.splice(1, 2)
numeros.splice(2, 1)

console.log(numeros)

//Exercício 6 - Aula 2

const nomes = ["Alice", "Bob", "Eva", "John", "Daniel", "Isabel"];

const novoArray = nomes.filter(nome => nome.length >= 5 && nome);

console.log("Nomes com 5 letras ou mais:", novoArray);

//Exercício 7 - Aula 2

const idades2 = [15, 22, 17, 20, 30, 12];

const maiorouigual18 = idades2.findIndex(idade => idade >= 18);

console.log("Índice do primeiro elemento que aparece >= a 18 é:", maiorouigual18);

//Exercício 8 - Aula 2

const idades3 = [15, 22, 17, 20, 30, 12];

const idadesreverso = idades3.slice().reverse();

const indice2 = idadesreverso.findIndex(idade => idade >= 18);

const lastindex18orbigger2 = indice2 !== -1 ? idadesreverso.length - 1 - indice2 : -1;

console.log("o índice do último elemento que aparece e seja >= a 18:", lastindex18orbigger2);

//Exercício 9 - Aula 2

const notas5 = [8, 9, 7, 5, 10, 6]

notas5.pop()
notas5.shift()

somaNotas = notas5[0] + notas5[1] + notas5[2] + notas5[3]
mediaAritmetica = (somaNotas / notas5.length)

console.log(mediaAritmetica)

//Exercício 10 - Aula 2

const palavras = ["Este", "é", "um", "exercício", "interessante"];

const novaString = palavras.join(" ");

console.log(novaString);