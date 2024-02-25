// Super Desafio - Aula 6

function simulacaoRolagemDados(quantidade) {
    let soma = 0;
    let rolagens = [];

    for (let i = 0; i < quantidade; i++) {
        let resultado = Math.floor(Math.random() * 6) + 1;
        soma += resultado;
        rolagens.push(resultado);
    }

    console.log('"rolagens individuais"');
    let index = 1;
    for (let rolagem of rolagens) {
        console.log(`"dado ${index++}: ${rolagem}"`);
    }

    console.log(`"soma dos valores: ${soma}"`);
}

let quantidade = 2;
simulacaoRolagemDados(quantidade);



// Super Desafio + - Aula 6

function simulacaoRolagemDados2(quantidadeDados, quantidadeLados) {
    let soma1 = 0;
    let rolagens1 = [];

    for (let i = 0; i < quantidadeDados; i++) {
        let resultado1 = Math.floor(Math.random() * quantidadeLados) + 1;
        soma1 += resultado1;
        rolagens1.push(resultado1);
    }

    console.log('"rolagens individuais"');
    let index1 = 1;
    for (let rolagem1 of rolagens1) {
        console.log(`"dado ${index1++}: ${rolagem1}"`);
    }

    console.log(`"soma dos valores: ${soma1}"`);
}

let quantidadeDados = 2;
let quantidadeLados = 9;
simulacaoRolagemDados2(quantidadeDados, quantidadeLados);



// Super Desafio ++ - Aula 6

function simularRolagemDeDados(quantidadeDados_12, quantidadeLados_12, quantidadeTentativas_12) {
    for (let tentativa_12 = 1; tentativa_12 <= quantidadeTentativas_12; tentativa_12++) {
        let soma_12 = 0;
        let rolagens_12 = [];

        for (let i_12 = 0; i_12 < quantidadeDados_12; i_12++) {
            let resultado_12 = Math.floor(Math.random() * quantidadeLados_12) + 1;
            soma_12 += resultado_12;
            rolagens_12.push(resultado_12);
        }

        console.log(`"Tentativa ${tentativa_12}"`);
        console.log('"Rolagens individuais"');
        let index_12 = 1;
        for (let rolagem_12 of rolagens_12) {
            console.log(`"dado ${index_12++}: ${rolagem_12}"`);
        }
        console.log(`"soma dos valores: ${soma_12}"`);
    }
}

let quantidadeDados_12 = 3;
let quantidadeLados_12 = 9;
let quantidadeTentativas_12 = 3;
simularRolagemDeDados(quantidadeDados_12, quantidadeLados_12, quantidadeTentativas_12);

// sacanagem ein prof