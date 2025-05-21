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
'use strict'

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

const arrayzao = []

console.log(arrayzao.length)
console.log(Object.getPrototypeOf(arrayzao))
console.log(Object.getPrototypeOf(arrayzao) == Array.prototype) // verificando se a variavel arrayzao herda de Array,se é do mesmo tipo que uma array

// Mais sobre prototype
//Protótipos são o mecanismo pelo qual objetos JavaScript 
// herdam características uns dos outros.
// a gente pode ver todos os métodos que estão disponível para gente usar dependendo de cada tipo.

const objeto = {
    a : "Renan"
}
console.log(Object.getPrototypeOf(objeto))
console.log(Object.getPrototypeOf(objeto) == Object.prototype)

const secondObject = Object.create(objeto)
console.log(Object.getPrototypeOf(secondObject) == Object.prototype)

// 7 funções como classe
function Veiculo (modelo,marca){
    this.modelo = modelo
    this.marca = marca
}

const ferrariz = new Veiculo("Ferrari 1920", "Spider")
console.log(ferrariz)

// 8 metodo na função construtora
Veiculo.prototype.acelerar = function(){
    console.log("Acelerandoooooooo")
};

console.log(Veiculo)
ferrariz.acelerar()

// Classes ES6 - abandoram a fuctions e começaram a usar as Classes 
// aqui é parecida com a POO das outras linguagens,temos o método constructor
// alem da instancia new

class carroClase {
    constructor(modelo,cor,anoLancamento){
        this.modelo = modelo
        this.cor = cor
        this.anoLancamento = anoLancamento
    }
}

let corsa = new carroClase("camaro","Amarelo",1900)
console.log(corsa)

console.log(Object.getPrototypeOf(corsa))

// 10 - mais sobre classes

class Moto {
    constructor(modelo,capacete,cor,eixo){
        this.modelo = modelo
        this.capacete = capacete
        this.cor = cor
    }

    acelerar(){
        console.log(`o modelo : ${this.modelo}, da cor ${this.cor} estpa acelerandooooooo,eixo ${this.eixo}`)
        
    }
}

let xj = new Moto('Yamaya',"Verde","Vermelho",4)
console.log(xj)

Moto.prototype.eixo = 4 // usando o protoype para definir os eixos 

console.log(xj.eixo)
xj.acelerar()

// override nas propriedades via Protype
// mudando os valores das propriedades do construtor utilizando o prototype

class Humano {
    constructor(nome,idade,anoNascimento){
        this.nome = nome
        this.idade = idade
        this.anoLancamento = anoNascimento
    }
}


const mulher = new Humano("Emily",18,2007)
console.log(mulher)

console.log(Humano.prototype.idade)

Humano.prototype.idade = 'Não sei' // definindo a propriedade idade de humano

console.log(mulher.idade)

console.log(Humano.prototype)


// symbols
// quando utilizamos o recurso de Symbol com classe é 
// possível criar uma propriedade única e imutável
// isso é util quando há algum dado que se repetirá em todos os obetos 
// criados a partir da classe
// De modo bem simples e direto, Symbol (símbolo) é um 
// tipo primitivo que armazena um valor único.
//  Seu propósito é esse, servir como um identificador único
class Aviao{
    constructor(marca,turbinas){
        this.marca = marca 
        this.turbinas = turbinas
    }
}

const asas = Symbol()
const pilotos = Symbol()

Aviao.prototype[asas] = 2;
Aviao.prototype[pilotos] = 3

const boeing = new Aviao("Boeing",10)
console.log(boeing)

console.log(boeing[pilotos])
console.log(boeing[asas])

// Exercicios com Symbol(valor Unico)

let meuSimbolo = Symbol("a")
console.log(meuSimbolo)

let seuSimbolo = Symbol("b")
console.log(seuSimbolo)

console.log(meuSimbolo == seuSimbolo)

// ex2
const numeroChassi = Symbol('numeroChassi')
const carro = {
    modelo : "Ferrari",
    [numeroChassi] : 40
}

console.log(carro[numeroChassi])

// ex3
const id = Symbol('id')
const propriedadeSimbol = {
    nome : "Renan",
    idade : "lucas",
    [id] : 90    
}

console.log(propriedadeSimbol[id]) // conseguimos imprimir

console.log(Object.keys(propriedadeSimbol))
console.log(Object.getOwnPropertySymbols(propriedadeSimbol))

for(const key in propriedadeSimbol){
    console.log(key) // se colocarmos id aqui,não conseguimos acessar aqui
}

// Getter e Setter são métodos bem famosos em POO
// get é um método utilizado para exibir o valor de alguma propriedade
// set é utilizado para alterar o valor

class Post {
    constructor(titulo,descricao,tags){
        this.titulo = titulo
        this.descricao = descricao
        this.tags = tags
    }

    get exibirTitulo(){
        return `Você está lendo: ${this.titulo}`;
    }

    set AdicionarTags(tags){
        const tagsArray = tags.split(", ")
        this.tags = tagsArray
        return tagsArray

    }
}


const myPost = new Post("Algum post", "Sempre Postando", "#RF")
console.log(myPost)

console.log(myPost)
console.log(myPost.exibirTitulo) // definido como método mais sendo chamando como propriedade

myPost.AdicionarTags = "Renan,Python"


class Pessoa{
    constructor(nome,corPele,idade,funcao){
        this.nome = nome
        this.corPele = corPele
        this.idade = idade
        this.funcao = funcao
    }


    get pegandoNome (){
       return `Olá ${this.nome}`
    }

    get CorPele (){
        return `A sua cor de pele é ${this.corPele}`
    }

    get getIdade (){
        return `A minha idade é ${this.idade}`
    }

    set setFuncao (funcao){
        const arrayFuncao = funcao.split(".")
        this.funcao = arrayFuncao
        return funcao
    }
}


const professor = new Pessoa("Renan","Moreno", "18", "Macho")
console.log(professor.getIdade)

professor.setFuncao = 'Renan.Gabriel,Rodrigues'
console.log(professor.funcao)


class comida {
    constructor(nome,qtd){
        this.nome = nome
        this.qtd = qtd
    }

    get pegando_nome(){
        return `Olá ${this.nome}`
    }

    set pegandoQuantidade(qtd){
        
    }
}