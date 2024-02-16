alert("Jogo do Acerte o número");
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;
const maxTentativas = 5; // Definindo o número máximo de tentativas

while (chute !== numeroSecreto) {
    if (tentativas > maxTentativas) {
        alert(`Você excedeu o número máximo de tentativas. O número secreto era ${numeroSecreto}.`);
        break;
    }

    chute = parseInt(prompt(`Tentativa ${tentativas}/${maxTentativas}: Chute um número entre 1 e ${numeroMaximo}:`));
    
    if (chute === numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}

if (chute === numeroSecreto) {
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    alert (`arrazou amg, o numero era ${numeroSecreto} e você acertou com ${tentativas} ${palavraTentativa}.`);
}