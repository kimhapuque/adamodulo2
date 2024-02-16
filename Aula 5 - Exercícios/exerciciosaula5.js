//Exercício 1 - Aula 5

let numero1 = 10;

while (numero1 >= 1) {
    console.log(numero1--);
}

//Exercício 2 - Aula 5

let numero2 = parseInt(prompt("Digite um número >1:"));
let primo = true;

let divisor = 2;
while (divisor < numero2 && primo) {
    if (numero2 % divisor === 0) {
        primo = false;
    }
    divisor++;
}

console.log(primo && numero2 > 1 ? numero2 + " é um número primo." : numero2 + " não é um número primo.");

//Exercício 3 - Aula 5

let somadospares = 0;
let numero3 = parseInt(prompt("Digite um número que seja par (digite 0 para parar e exibir a soma total):"));

while (numero3 !== 0) {
    if (numero3 % 2 === 0) {
        somadospares += numero3;
    }
    numero3 = parseInt(prompt("Digite um número que seja par (digite 0 para parar e exibir a soma total):"));
}

console.log("A soma apenas dos números pares digitados é: " + somadospares);

//Exercício 4 - Aula 5

alert("Jogo do Acerte o número");
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1)
console.log (numeroSecreto);
let chute;
let tentativas = 1;

//enquanto o chute for diferente do numero secre
while (chute != numeroSecreto) {
    chute  = prompt (`Chute um número entre 1 e ${numeroMaximo}:`);
    // se o chute for igual ao numero secreto:
if (numeroSecreto == chute) {
break;
    } else {
        if (chute > numeroSecreto) {
            alert (`O número secreto é menor que ${chute}`);
        } else {
            alert (`O número secreto é maior que ${chute}`);
        }
        //tentativas = (tentativas + 1)
        tentativas++;
    } // senao 
    }
    //essa palhaçada toda aqui significa oq ta comentado em baixo
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
    alert (`arrazou amg, o numero era ${numeroSecreto} e você acertou com ${tentativas} ${palavraTentativa}.`);
        // if (tentativas > 1) {
        //     alert (`arrazou amg, o numero era ${numeroSecreto} e você acertou de primera`);
        //     }
        // else (            
        //     alert (`arrazou amg, o numero era ${numeroSecreto} e você acertou com ${tentativas}`));

        // Já tinha feito esse mesmo projeto no curso da alura então reaproveitei!


//Exercício 5 - Aula 5 vai ser feito em outro arquivo.