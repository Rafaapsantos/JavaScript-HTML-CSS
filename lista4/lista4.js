
function exemplo1(){
let vetor=[]
//for para entrada de dados
    for (let i  = 0; i <5; i ++){
    vetor.push(Number(prompt(`DIGITE A NOTA D0 ${i+1}° ALUNO:`))) // push serve para inserir um elemento no vetor 
    }
    let soma=0
    //for para somar e depois calcular a media 
    for (let i = 0; i<5; i++) {
        soma=soma+vetor[i]
    }
    let media= soma/vetor.length
    alert(`A media é : ${media}`)
    //for para encontrar a maior nota 
    let maior = vetor[0] // maior nota é a primeira 
    for (let i = 1; i < 5; i++) {
        if (vetor[i]>maior) {
            maior= vetor[i]
        }    
    }
}
function exemplo2() {
    let nome=[]
    let nota=[]

//for para entrada de dados
    for (let i  = 0; i <5; i ++){
        nome.push(String(prompt(`DIGITE O NOME DO ${i+1}° ALUNO: `)))
        nota.push(Number(prompt(`DIGITE A NOTA D0 ${i+1}° ALUNO:`)))
    }

    let soma=0
    //for para somar e depois calcular a media 
    for (let i = 0; i<5; i++) {
        soma=soma+nota[i]
    }
    let media= soma/nota.length
    alert(`A media é : ${media}`)

    //for para encontrar a maior nota 
    let maior = nota[0] // maior nota é a primeira 
    let menor = nota[0]
    for (let i = 1; i < 5; i++) {
        if (nota[i]>maior) {
            maior= nota[i]
        }    
        if (nota[i]<menor) {
            menor=nota[i]
        }
    }
    alert(`MAIOR NOTA ${maior}, NOME DA MAIOR NOTA: ${nome[nota.indexOf(maior)]}`)
    alert(`MENOR NOTA ${menor}, NOME DA MENOR NOTA: ${nome[nota.indexOf(menor)]}` )
}
function exe1(){
    let numeros=[]
    let numerosPares=[]
    let numerosImpares=[]

    for (let i = 0; i<6; i++) {
        numeros.push(Number(prompt(`DIGITE O ${i+1} NÚMERO:`)))
    }
    let acumuladorNumPares=0
    let acumuladorNumImpares=0

    for (let i = 0; i<6; i++) {
        if (numeros[i] % 2==0) {
            acumuladorNumPares++
            numerosPares.push(numeros[i])
        }else{
            acumuladorNumImpares++
            numerosImpares.push(numeros[i])
        }
    }
   alert(`OS NÚMEROS PARES SÃO ${numerosPares} E A QUANTIDADE DE NÚMEROS PARES SÃO ${acumuladorNumPares}`) 
   alert(`OS NÚMEROS IMPARES SÃO ${numerosImpares} E A QUANTIDADE DE NÚMEROS IMPARES SÃO ${acumuladorNumImpares}`) 
}
function exe2(){
    let numeros=[]
    let numerosMultiplos2=[]
    let numerosMultiplos3=[]
    let numerosMultiplos2e3=[]
    for (let i = 0; i<7; i++) {
        numeros.push(Number(prompt(`DIGITE O ${i+1} NÚMERO:`)))
    }
    for (let i = 0; i<7; i++) {
        if (numeros[i] % 2 == 0 ) {
            numerosMultiplos2.push(numeros[i])
        }
    }
    for (let i = 0; i<7; i++) {
        if (numeros[i] % 3 == 0 ) {
            numerosMultiplos3.push(numeros[i])
        }
    }
    for (let i = 0; i<7; i++) {
        if (numeros[i] % 2 == 0 && numeros[i] % 3 == 0  ) {
            numerosMultiplos2e3.push(numeros[i])
        }
    }
    alert(`OS NÚMEROS MULTIPLOS DE 2 SÃO ${numerosMultiplos2}`) 
    alert(`OS NÚMEROS MULTIPLOS DE 3 SÃO ${numerosMultiplos3}`) 
    alert(`OS NÚMEROS MULTIPLOS DE 2 E DE 3 SÃO ${numerosMultiplos2e3}`) 
}
function exe3() {
    let codigo=[]
    let estoque=[]

    // entrada de dados 
    for (let i = 0; i<10; i++) {
        codigo.push(Number(prompt(`DIGITE O CÓDIGO DO ${i+1}° PRODUTO:`)))
        estoque.push(Number(prompt(`DIGITE O TOTAL DE ESTOQUE DO ${i+1}° PRODUTO:`)))
    }
    //compra por um cliente
    let cliente = Number(prompt(`DIGITE O CÓDIGO DO CLIENTE QUE DESEJA COMPRAR:`))
    do{
        let produto = Number(prompt(`DIGITE O CÓDIGO DO PRODUTO QUE DESEJA COMPRAR:`))
        let qnt = Number(prompt(`DIGITE A QUANTIDADE QUE DESEJA COMPRAR:`))

        //verificando se o produto existe e se tem estoque 
        let achou=false // produto nao foi encontrado 
        for (let i = 0; i<10; i++) {
            if (codigo[i]==produto) { //encontrou o produto
                achou=true //achou o produto
                if (estoque[i]>=qnt) { // tem estoque
                    alert(`VENDA REALIZADA COM SUCESSO`)
                    estoque[i]=estoque[i]-qnt //atualiza o estoque
                }else{
                    alert(`NÃO TEM ESTOQUE SUFICIENTE`)
                }
            }
        }
        if (!achou) { //não encontrou o produto
            alert(`PRODUTO NÃO ENCONTRADO`)
        }
        cliente = Number(prompt(`DIGITE O CÓDIGO DO CLIENTE QUE DESEJA COMPRAR:`))
    }
    while (cliente!= 0)
    for (let i = 0; i<10; i++){
        alert(`CÓDIGO: ${codigo[i]} , ESTOQUE: ${estoque[i]}`)
    }
    
}
function exe4(){
    let numeros=[]

    for (let i = 0; i<15; i++) {
        numeros.push(Number(prompt(`DIGITE O ${i+1} NÚMERO:`)))
    }
    let valorProcurado =30
    let posicoes=[]

    for (let i = 0; i<15; i++) {
        if (numeros[i]==valorProcurado) {
        posicoes.push(i)
        }
    }
    alert(`O INDEX QUE O 30 APARECE É ${posicoes}`)
}

function exe5() {
    let logica =[]

    for (let i = 0; i<15; i++) {
        logica.push(Number(prompt(`DIGITE O SEU NÚMERO DA MATRICULA DO CURSO DE LÓGICA:`)))
    }
    let lingProg=[]

    for (let i = 0; i<10; i++) {
        lingProg.push(Number(prompt(`DIGITE O SEU NÚMERO DA MATRICULA DO CURSO DE LINGUAGEM DE PROGRAMAÇÃO:`)))
    }
    let matriculaIgual=[]
    for (let i = 0; i<15; i++) {
        if (lingProg.includes(logica[i])) {
        matriculaIgual.push(logica[i])
        }
    }
    if (matriculaIgual.length>0) {
        alert(`OS NÚMEROS DE MATRICULAS IGUAIS SÃO: ${matriculaIgual}`)
    }else{
        alert(`NÃO HÁ ALUNOS CURSANDO AMBAS AS DICIPLINAS!`)
    }
    
}
function exe6(){

}

function exe7(){
    let numeros=[]
    for (let i = 0; i<10; i++) {
        numeros.push(Number(prompt(`DIGITE O ${i+1} NÚMERO REAL (PODE SER NEGATIVO OU POSITIVO):`)))
    }
    let qntNumNegativos=0
    let soma=0
    for (let i = 0; i<10; i++) {
        if (numeros[i]<0) {
            qntNumNegativos++
        }else{
            soma=soma+numeros[i]
        }
    }
    alert(`A QUANTIDADE DE NÚMEROS NEGATIVOS É DE ${qntNumNegativos}`)
    alert(`A SOMA DE TODOS OS NÚMEROS POSITIVOS É DE ${soma}`)
}