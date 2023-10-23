//tem 3 formas de fazer a função
//1°
function soma(a,b){ // dentro dos parenteses é onde o usuario passa os parametros que voce determina 
    console.log(`Soma é ${a+b}`)
}

//2°
// esse tipo é melhor para usar
function soma2 (a,b){
    return (a+b)
}

//3°
// não passa parametro, o programa vai perguntar pro usuario o valor do parametro
function soma3(){
    let a = parseInt(prompt(`Digite o valor de a`))
    let b = parseInt(prompt(`Digite o valor de b`))
    return a+b
}

function alteraIdade(idade){
    idade= idade+10 // para dar certo, poderia colocar o retorn depois
    console.log(`Dentro da função ${idade}`)// aqui a resposta vai ser 28
}

function alteraVetor(vet){
    vet[0] = vet[0]+10
    vet[1] = vet[1]+10
    vet[2] = vet[2]+10
    console.log(`dentro da função ${vet}`)
}

//exemplo de funcionamento 
function principal(){
    soma(4,4)
    console.log(`A soma é ${soma2(2,2)}`)
    console.log(`A soma é ${soma3()}`)

// passagem de parametro por valor ---> passa-se o valor da variavel 
//qual o efeito colateral disso?
// R: a mudança do valor da variavel dentro da função não altera a variavel de fora da funçao 
// OBS: vale quando se passa como parametro um int, um float, um boolean ou um char
// ou seja, um tipo primitivo de dados

    let idade=18
    alteraIdade(idade)
    console.log(idade)//aqui o valor vai ser 18, pois são escopos diferentes

// passagem de parametro por referencia --> passa-se a referencia da variavel 
//qual o efeito colateral disso?
// R: a mudança do valor da variavel dentro da função altera a variavel de fora da função 
// OBS: vale quando se passa como parametro um vetor, uma matriz ou um objeto

    let vet=[]

    vet[0]=10; vet[1]=11; vet[2]=12
    alteraVetor(vet)
    console.log(`fora da função ${vet}`)
}