/*Exercício de interpretação de códigos
1) 

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

console.log("d. ", typeof resultado)

a. false
b. fale
c. true
d. boolean

2)
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

faltou converter o valor da variável como "Number"

3)

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = Number(primeiroNumero) + Number(segundoNumero)

console.log(soma)

Para que o código execute de maneira correta, é necessário que 
sejam convertidas as strings parea Numbers*/

//Exercícios de escrita de código

/*
1)
const minhaIdade = prompt("Qual sua idade?")
const idadeMelhorAmigo = prompt("Qual a idade do seu melhor amigo?")
const diferancaIdade = Number(minhaIdade) - Number(idadeMelhorAmigo)
console.log(diferancaIdade) 
console.log("Sua idade é maior que a do seu amigo?" ,  minhaIdade > idadeMelhorAmigo)
*/

/*
2)
const numeroPar = prompt("Digite um número par")
const restoDaDivisao = Number(numeroPar) % 2

console.log(restoDaDivisao)

Resposta: Ao dividir por númuero para o resultado é sempre zero. 
Ao dividir por número ímpar o resultado sobre sempre 1.
*/



