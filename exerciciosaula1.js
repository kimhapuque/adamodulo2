//Exercício 1 - Aula 1

let idade = prompt("Qual a sua idade?")
let nacionalidade = prompt("Nacionalidade?")

alert(idade >= 18 && nacionalidade == "brasileira" || nacionalidade == "brasileiro" || nacionalidade == "Brasileira" || nacionalidade == "Brasileiro")

//Exercício 2 - Aula 1

let salario = prompt("Digite seu salário:")
let scoreCredito = prompt("Seu score?")
let idade2 = prompt("Digite sua idade:")

alert (salario >= 5000 && scoreCredito >= 700 && idade2 >= 18)

//Exercício 3 - Aula 1

let navegador = prompt("Qual seu Navegador?")
let sistemaOperacional = prompt("E qual o seu sistema operacional?")

alert (navegador == "Firefox" || navegador == "Chrome" && sistemaOperacional == "Windows" || sistemaOperacional == "Mac")

//Exercício 4 - Aula 1

let idade3 = prompt("Qual a sua idade?")
let compraMinima = prompt("Quanto deu a sua compra?")
let newClient = prompt("Já é cliente nosso?")

alert (idade3 >= 60 && compraMinima >= 100 && newClient == "nao")
