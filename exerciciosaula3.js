//Exercício 1 - Aula 3

const listaDeCompras = new Map();

listaDeCompras.set('Maçã', 5);
listaDeCompras.set('Banana', 3);
listaDeCompras.set('Leite', 4);
listaDeCompras.set('Pão', 10);

const verificarItem = (item) => {
    return listaDeCompras.has(item);
};

const verificarQuantidade = (item) => {
    return listaDeCompras.get(item);
};

const modificarQuantidade = (item, quantidade) => {
    if (listaDeCompras.has(item)) {
        listaDeCompras.set(item, quantidade);
        console.log(`A quantidade de ${item} agora é ${quantidade}.`);
    } else {
        console.log(`${item} não está mais na sua lista de compras.`);
    }
};

const removerItem = (item) => {
    if (listaDeCompras.has(item)) {
        listaDeCompras.delete(item);
        console.log(`${item} tirado da lista de compras.`);
    } else {
        console.log(`${item} não está mais na sua lista de compras.`);
    }
};

console.log(verificarItem('Banana'));
console.log(verificarItem('Abacaxi'));

console.log(verificarQuantidade('Pão'));

modificarQuantidade('Leite', 6);
console.log(verificarQuantidade('Leite'));

removerItem('Maçã');
console.log(verificarItem('Maçã'));



//Exercício 2 - Aula 3

function criarContato(nome, telefone, email) {
    return {
        nome,
        telefone,
        email
    };
}

function adicionarContato(agenda, nome, telefone, email) {
    const novoContato = criarContato(nome, telefone, email);
    agenda.push(novoContato);
}

function verificarContatoPorNome(agenda, nome) {
    return agenda.some(contato => contato.nome === nome);
}

function buscarContatoPorNome(agenda, nome) {
    return agenda.find(contato => contato.nome === nome);
}

function buscarContatoPorTelefone(agenda, telefone) {
    return agenda.find(contato => contato.telefone === telefone);
}

function buscarContatoPorEmail(agenda, email) {
    return agenda.find(contato => contato.email === email);
}

const agenda = [];

adicionarContato(agenda, "Yudi", "40028922", "ehofunkdoyudi@quevaidarplaystation2.com");
adicionarContato(agenda, "Yudi2", "40028923", "novosomdojapones@quevaidarplaystation3.com");
adicionarContato(agenda, "Maisa", "40028924", "criancaafrontosa@naoehmaiscrianca.com");

console.log(verificarContatoPorNome(agenda, "Yudi"));
console.log(verificarContatoPorNome(agenda, "Silvio Santos"));

console.log(buscarContatoPorNome(agenda, "Yudi2"));

console.log(buscarContatoPorTelefone(agenda, "40028922"));

console.log(buscarContatoPorEmail(agenda, "novosomdojapones@quevaidarplaystation3.com"));



//Exercício 3 - Aula 3

const dicionarioDeSinonimos = {
    afrontoso: ["descarado", "insolente", "atrevido"],
    semVergonha: ["desavergonhado", "cínico", "descarado"],
    safado: ["malandro", "trapaceiro", "desonesto"],
    feio: ["desagradável", "repulsivo", "horroroso"]
};

console.log(dicionarioDeSinonimos.semVergonha);
console.log(dicionarioDeSinonimos.safado);
console.log(dicionarioDeSinonimos.feio);



//Exercício 4 - Aula 3

const dicionarioDeSinonimos2 = new Map([
    ["afrontoso", ["descarado", "insolente", "atrevido"]],
    ["semVergonha", ["desavergonhado", "cínico", "descarado"]],
    ["safado", ["malandro", "trapaceiro", "desonesto"]],
    ["feio", ["desagradável", "repulsivo", "horroroso"]]
]);

console.log(dicionarioDeSinonimos2.get("afrontoso"));
console.log(dicionarioDeSinonimos2.get("semVergonha"));
console.log(dicionarioDeSinonimos2.get("safado"));
console.log(dicionarioDeSinonimos2.get("feio"));



//Exercício 5 - Aula 3

const pessoa = {
    nome: "Gretchen",
    idade: 30,
    cidade: "Cuiabá"
};

const maiorDeIdade = pessoa.idade >= 18;
const naosp = pessoa.cidade !== "São Paulo";

console.log(maiorDeIdade);
console.log(naosp);



//Exercício 6 - Aula 3

const aluno = {
    nome: "Kimberlly",
    nota1: 9,
    nota2: 8
};

const media = (aluno.nota1 + aluno.nota2) / 2;
const aprovado = media >= 7;

console.log("Média:", media);
console.log("Aprovado:", aprovado); //com certeza >:D



//Exercício 7 - Aula 3

const frutas = new Map([
    ["maçã", 8],
    ["banana", 4],
    ["pêra", 11],
    ["uva", 10],
    ["goiaba", 5],
    ["graviola", 15],
    ["morango", 10],
    ["tomate", 3],
    ["ciriguela", 15],
    ["quiwi", 11]
]);

const precoMaca = frutas.get("maçã");
const precoBanana = frutas.get("banana");
const precoPera = frutas.get("pêra");
const precoUva = frutas.get("uva");
const precoGoiaba = frutas.get("goiaba");
const precoGraviola = frutas.get("graviola");
const precoMorango = frutas.get("morango");
const precoTomate = frutas.get("tomate");
const precoCiriguela = frutas.get("ciriguela");
const precoQuiwi = frutas.get("quiwi");

const macaMaiorQBanana = precoMaca > precoBanana;
const peradiferentedeUva = precoPera !== precoUva;

console.log("A maçã é mais cara que a banana?", macaMaiorQBanana);
console.log("A pêra custa o mesmo que a uva?", peradiferentedeUva);