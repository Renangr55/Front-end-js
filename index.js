'use strict'
/*
// arrow fuction
const soma = (a,b) => (a+b)

// a arrow fuction é uma função que chegou na versão 6 do javascript
// ela é um jeito mais rapido de criar uma função

let teste = soma(10,20)
console.log(teste)

// argumemto default 
let p = (nome, comprimento = "Bom dia") => {
    return `ola ${nome}, kkkk, ${comprimento}`
}

let normal = p("renan")
console.log(normal)

let variando = p("Gabriel", "se tá bonito em")
console.log(variando)

// Closures - Fechamentos

// é um conjunto de funções onde temos um reaproveitamento do escopo interno de uma função,pois esse
//escopo não pode ser acessado fora da função,pq está fora do escopo

// A clouseres aproveita o escopo,usada também quando a função está muito grande ai ela é dividida em funções

function onlyFuction (nome){

    let text = 'olá '

    function testing () {
        console.log(`${text}, ${nome}` )
    }

    testing()
}
onlyFuction("renan")

// vendo mais sobre closures
// ela pode salvar resultados ja executado,criando uma espécie de incrementação e modifica o valor
const multiplicate = (n)=> {
    return (m) =>{
        return n * m
    }
}

const c1 = multiplicate(10)

const c2 = multiplicate(5)

console.log(c1,c2)

console.log(c1(10))
console.log(c2(5))

//exercício - closures


//ex1
const contador = () =>{
    let cont = 0;

    return () => {
        cont++
        
        return cont;
    } 

    
}

const increment = contador()
console.log(increment())
console.log(increment())


//ex2 

const mensagem = (nome,mensagem) => {
    let saudacao = "seja bem vindo"

    return () => {
        return (`${saudacao}, ${nome}, ${mensagem}`)
    }
}

let exibindo = mensagem("renan", "vc é diferenciado")
console.log(exibindo())

//ex3

const criarFiltro = (filtro) => {
    let valor = false

    return (m) => {
        if(m % filtro == 0){
            valor = true
            return valor 
        } else {
            valor = false
            return valor
        }
        
    }
}

let filtro_por_2 = criarFiltro(2)
console.log(filtro_por_2(2)) // true
console.log(filtro_por_2(4)) // true
console.log(filtro_por_2(5)) // false


// PUXANDO UMA FUNÇÃO POR LISTA
function kakap(){
    let objectos = {
        name : "renan",
        soma : function() {
            return 10 + 20
        },
        mensagem : "ola gabriel"
    }

    return objectos
}

let dandoExibida = kakap()
console.log(dandoExibida.soma())
console.log(dandoExibida.name)

const obj = {
    nome : "renan",
    idade : "idade"
}


console.log(obj instanceof Object) // verifincando se o dicionario é igual a object

const obj2 = {
    comida : "lasanha"
}

Object.assign(obj2, obj) // pegando dados de obj para ob2

console.log(obj)
console.log(obj2)

// conhecendo melhor os objetos
console.log("__________")
console.log(Object.keys(obj)) // vendo todas a chaves que o objeto possui
console.log(Object.keys(obj2))

// mutação
// criando um objeto refencia de outro objeto
const m = {
    nome : "renan",
    idade : 20
}

const n = m

console.log(m)
console.log(n)

m.age = 30
m.work = "Software engineer "

console.log(m)

// for each em javascript
// ele percorre por cada item no array
// ele é uma função
// ✅ forEach percorre os valores, mas com uma função callback

//ex 1 de for-each
const numbers = [1,2,3,4,5,6,7,8,10]

numbers.forEach((numero) => {
    console.log(numero)
})

//ex 2 de for-each
const nomes = ["RENAN","THIAGO","KAKA","LUCAS"]
nomes.forEach((nome) => {
    console.log(nome)
})

//ex 3 de for-each
const numerosSoma = [10,20,30,40,50]
let totalizando = 0;
numerosSoma.forEach(function(numm){
    totalizando += numm
})
console.log(`a soma é` + totalizando)

// ex 4 for-each
let nomezitos = ["renan", "gabriel", "Rodrigues"]

nomezitos.forEach(function(nomezin){
    nomezitos = nomezin.toUpperCase()
    console.log(nomezitos)
})

// ex5 for-each
let numerosTeste = [1,2,3,4,5,6,7,8,9,10]
let pares = 0
let impares = 0

numerosTeste.forEach(function(numerezin){
    if (numerezin % 2 == 0){
        pares++
    } else{
        impares++
    }
})
console.log(`esse número é par: ${pares}`)
console.log(`esse número é par: ${impares}`)


// repeat = repetição

let text = "renan"
console.log(text.repeat(7))

// rest Operator(...): podemos utilizar para receber indefinidos argumentos em uma função
// assim não precisamos declarar exatamente oq vamos receber,deixando ela mais ampla
// parte moderna

let somaInfinita = (...args) => {
    let total = 0

    for(let i = 0; i < args.length; i++){
        total += args[i]
    }

    return total
}

console.log(somaInfinita(10,20,30,40,50,60)) // somando infinitamente

// for of
// percorre os valores

let somaInfinitaForOf = (...args) => {
    let total = 0

    for(num of length){
        total += num
    }

    return total
}

console.log(somaInfinita(10,20,30,40,50,60)) // somando infinitamente




let verifincandoPares = (...args) => {
    let contadorPares = 0
    let contadorImpares = 0

    for(let i = 0; i <= args.length; i++){
        if (args[i] % 2 == 0){
            contadorPares++
        } else {
            contadorImpares++
        }
    }

    console.log("Aqui são números")
    return{
        contadorPares,
        contadorImpares
    }
}

console.log(verifincandoPares(1,2,3,4,5,6,7,8,9,10))
*/

// Desestruturação (ou destructuring)
// extrair valores de arrays ou propriedades de objetos e armazená-los em variáveis individuais


const daditos = {
    firstName : "Renan" ,
    LastName : "Gabriel",
    job : "Programador"
}

const {firstName, LastName, job} = daditos
console.log(daditos)

// renomeando dados
const {firstName : primeiroNome} = daditos
const {LastName : segundoNome} = daditos
const {job : trabalho} = daditos

console.log(primeiroNome)
console.log(daditos)

// Exercicio 1 destruturação com objetos
const usuario = {
    nome: "Carlos",
    idade: 30,
    profissao: "Engenheiro"
};

//Exercicio 2
const pessoa = {
    nomeJ: "Julia",
    idadee: 22
};

const {nomeJ: nomeDaJulia} = pessoa
const {idadee: minhaIdade} = pessoa

console.log(pessoa)

//Exercício 3

const livro = {
    nomeLivro: "O Tubarão",
    autor: "jake",
    ano: 1990

}

function descreverLivro(Livro){
     const {nomeLivro} = Livro
     const {autor} = Livro
     const {ano} = Livro

     return `o nome do livro: ${nomeLivro}, autor: ${autor}, ano: ${ano}`
}

let testando = descreverLivro(livro)
console.log(testando)
  

const {nome,idade,profissao} = usuario
console.log(usuario)

// Desestruturação (ou destructuring) em array

const informacoes = ["Renan", "Gabriel", "Rodrigues", "Mendonça"]

const [a,b,c] = informacoes
console.log(informacoes)



//Exercicio1 - Desestruração de array
const frutas = ["maçã", "banana", "laranja", "uva", "melancia"];
const [d,e] = frutas
console.log(`exibindo os dois primeiros elementos ${d} e ${e}`)

// Exercicio2 - com restOperator
const nums = [10, 20, 30, 40, 50];
const [primeiroelemento,...outrosElementos] = nums
console.log(primeiroelemento,outrosElementos)



// convertendo para json
const MyJson = 
    '{"Name" : "Renan", "Age" : 50, "skils" : ["Django", "Python", "Java"]}' // assim é somente uma string

const myObject = JSON.parse(MyJson) // convertendo para json


console.log(myObject)
console.log(myObject.Name)
myObject.isToWork = true // adicionando mais um elemento no json
console.log(myObject)

// para uma usarmos esse json em uma api precisamos converter para texto
// Agora `novoObject` é uma string JSON, pronta para ser enviada para uma API.
const novoObject = JSON.stringify(myObject) 

const aluno = 
    {
        nome: "Renan", 
        idade: 18,
        curso: "Desenvolvimento de Sistemas" 
    }


const AlunoObjectString = JSON.stringify(aluno)
console.log(AlunoObjectString)


const AlunoObject = JSON.parse(AlunoObjectString)
AlunoObject.email = "kk@gmail.com"
console.log(AlunoObject)

const endereco = {
    rua: "Rua das Flores",
    numero: 123,
    cidade: "Campinas",
    estado: "SP"
};

let kaka = endereco.cidade = "Riberão Preto"
console.log(endereco)

const usuarios = [
    { nome: "Ana", idade: 25 },
    { nome: "Lucas", idade: 30 },
    { nome: "João", idade: 22 }
  ];

for(let i = 0; i < usuarios.length; i++){
    console.log(usuarios[i].nome)
}

//  Métodos

const ak = {
    nome : "Beatriz vitória dos Santos",

    getNome: function(){
        return this.nome
    },

    setnome: function(novoNome){
        this.nome = novoNome
    }
}

console.log(ak.nome)
console.log(ak.getNome())
ak.setnome("RENAN")
console.log(ak.nome)

// PROTOTYPE é um recurso que faz parte da arquitetura do javascript
// é uma espécie de herança, onde objetos pais,herdam propriedades e métodos aos filhos
// por isso muitos dados são considerados obbjetos,ou seja cada tipo de dado tem um objeto pai que herdou
//caracteristica pelo prototype
// por isso que podemos utilizar lenght em string, por que ele herda de protype

let strinha = "Renan"
console.log(Object.getPrototypeOf(strinha))

let numeeros = 10
console.log(Object.getPrototypeOf(numeeros))

let arr = []
console.log(Object.getPrototypeOf(arr))

let objj = {}
console.log(Object.getPrototypeOf(objj))