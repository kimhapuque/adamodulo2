//Exercício 1 - Aula 4

const numero = 9;

if (numero % 2 === 0) {   // com if
    console.log("É par");
} else {
    console.log("É ímpar");
}

const mensagem = numero % 2 === 0 ? "É par" : "É ímpar";  // com operador ternário
console.log(mensagem);



//Exercício 2 - Aula 4

const nota = 88;

if (nota >= 90) {
    console.log("Aprovado com mérito");
} else if (nota >= 70) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}



//Exercício 3 - Aula 4

const num1 = 25;
const num2 = 40;
const num3 = 12;

let maiorNum;

if (num1 >= num2 && num1 >= num3) {
    maiorNum = num1;
} else if (num2 >= num1 && num2 >= num3) {
    maiorNum = num2;
} else {
    maiorNum = num3;
}

console.log("O maior número é:", maiorNum);



//Exercício 4 - Aula 4

function definirTriangulo(lado1, lado2, lado3) {
    if (lado1 === lado2 && lado2 === lado3) {
        return "Equilátero"; // todo lado é igual
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        return "Isósceles"; // dois lados são iguais
    } else {
        return "Escaleno"; // nenhum lado é igual
    }
}

const ladoA = 8;
const ladoB = 25;
const ladoC = 12;

console.log("O triângulo é:", definirTriangulo(ladoA, ladoB, ladoC));



//Exercício 5 - Aula 4

function verSeOAnoEBissexto(ano) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
        return "Ano bissexto";
    } else {
        return "Não é ano bissexto";
    }
}

console.log(verSeOAnoEBissexto(2004));
console.log(verSeOAnoEBissexto(1995));
console.log(verSeOAnoEBissexto(1350));



//Exercício 6 - Aula 4

const idade = 28;

if (idade >= 18) {    // com if
    console.log("Tá liberado");   
} else {
    console.log("Carro apreendido");   
}

const podeDirigir = idade >= 18 ? "Tá liberado mano" : "Pode ir ligando pra mãe";   // com operador ternário
console.log(podeDirigir);



//Exercício 7 - Aula 4

const numero2 = "sabonete";

switch(numero2 % 2) {
    case 0:
        console.log("Par");
        break;
    case 1:
        console.log("Ímpar");
        break;
    default:
        console.log("Nenhum dos dois");
}



//Exercício 8 - Aula 4

const letra = prompt("Qual é a letra que deseja verificar?").toLowerCase();

switch(letra) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log("É vogal");
        break;
    default:
        console.log("É consoante");
}



//Exercício 9 - Aula 4

const mes = prompt("Qual mês deseja verificar a estação?").toLowerCase();

switch(mes) {
    case 'janeiro':
    case 'fevereiro':
    case 'março':
        console.log("Prepara o casaco - Inverno");
        break;
    case 'abril':
    case 'maio':
    case 'junho':
        console.log("Flores LGBT - Primavera");
        break;
    case 'julho':
    case 'agosto':
    case 'setembro':
        console.log("Tira a cueca - Verão");
        break;
    case 'outubro':
    case 'novembro':
    case 'dezembro':
        console.log("Quando a mãe do bambi morreu - Outono");
        break;
    default:
        console.log("Isso ai não é um mês irmão");
}