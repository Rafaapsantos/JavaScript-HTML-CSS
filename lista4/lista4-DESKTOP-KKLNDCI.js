
function exemplo1(){
let vetor=[]
//for para entrada de dados
    for (let i  = 0; i <5; i ++){
    vetor.push(Number(prompt(`DIGITE A NOTA D0 ${i+1}° ALUNO:`)))
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
    let codigos = []
    let estoque = []
    // etrada de dados
    for(let i=0;i<10;i++){
        codigos.push(Number(prompt(`INFORME O CODIGO DO ${i+1}° PRODUTO`)))
        estoque.push(Number(prompt(`INFORME A QUANTIDADE DE ESTOQUE DO ${i+1}° PRODUTO`)))
    }
    // compra por um cliente
    let cliente = Number(prompt(`INFORME O CÓDIGO DO CLIENTE`))
    do {
        let produto = Number(prompt(`INFORME O CÓDIGO DO PRODUTO `))
        let qtde = Number(prompt(`INFORME A QUANTIDADE QUE DESEJA COMPRAR`))
        // verificando se o produto existe e se tem estoque
        let achou = false // produto não foi encontrado
        for(let i=0;i<10;i++){
            if (codigos[i] == produto){ // encontrou o produto
                achou = true // achou o produto
                if (estoque[i] >= qtde){ // tem estoque
                    alert(`VENDA REALIZADA COM SUCESSO`)
                    estoque[i] = estoque[i] - qtde // atualiza estoque
                }
                else {
                    alert(`NÃO TEM ESTOQUE SUFICIENTE`)
                }
            }
        }
        if (!achou){ // não encontrou o produto
            alert(`PRODUTO NÃO ENCONTRADO `)
        }
        cliente = Number(prompt(`INFORME O CÓDIGO DO CLIENTE. DIGITE 0 PARA ENCERRAR O PROGRAMA`))
    }
    while(cliente != 0)
    // mostra o resultado
    for(let i=0;i<10;i++){
        alert(`O PRODUTO ${codigos[i]} TEM ${estoque[i]} UNIDADES NO ESTOQUE`)
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
    let vendedores =[]
    let porctComissao=[]
    let Vendas=[]

    for (let i = 0; i<10; i++) {
        vendedores.push(String(prompt(`DIGITE O NOME DO ${i+1}° VENDEDOR:`)))
        porctComissao.push(Number(prompt(`DIGITE O PERCENTUAL DE COMISSÃO DO ${i+1}° VENDEDOR:`)))
        Vendas.push(Number(prompt(`DIGITE O TOTAL DAS VENDAS DO ${i+1}° VENDEDOR:`)))
    }

    let valorComissao=[]
    let totalVendas=0

    for (let i = 0; i<10; i++) {
        valorComissao.push((porctComissao[i]/100)*Vendas[i])
        totalVendas=totalVendas+Vendas[i]
    }
    let maiorComissao=valorComissao[0]
    let menorComissao= valorComissao[0]
    for (let i = 0; i<10; i++) {
        if (valorComissao[i]>maiorComissao) {
            maiorComissao=valorComissao[i]
        }
        if (valorComissao[i]<menorComissao) {
            menorComissao=valorComissao[i]
        }
    }
    for (let i = 0; i<10; i++) {
    alert(`O VENDEDOR ${vendedores[i]} VAI RECEBER R$${valorComissao[i].toFixed(2)} DE COMISSÃO`)
    }
    alert(`O TOTAL DAS VENDAS FOI DE R$${totalVendas}`)
    alert(`O MAIOR VALOR DE COMISSÃO É DE R$${maiorComissao} ESSE VALOR É DO VENDEDOR ${vendedores[valorComissao.indexOf(maiorComissao)]}`)
    alert(`O MENOR VALOR DE COMISSÃO É DE R$${menorComissao} ESSE VALOR É DO VENDEDOR ${vendedores[valorComissao.indexOf(menorComissao)]}`)
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
function exe8(){
    let nomes=[]
    let media=[]
    for (let i = 0; i<7; i++) {
        nomes.push(String(prompt(`DIGITE O ${i+1} NOME:`)))
        media.push(Number(prompt(`DIGITE A ${i+1} MÉDIA:`)))
    }
    let maiorMedia=media[0]
    for (let i = 0; i<7; i++) {
        if (media[i]>maiorMedia) {
            maiorMedia=media[i]
        }
        if (media[i] < 7 ) { //nota que o aluno 
            let faltaParaPassar = 7 - media[i]
            alert(`O ${nomes[i]} PRECISA TIRAR ${faltaParaPassar} PARA SER APROVADO `)
        }
    }
    alert(`O NOME DO ALUNO COM MAIOR MÉDIA É ${nomes[media.indexOf(maiorMedia)]}`)
}