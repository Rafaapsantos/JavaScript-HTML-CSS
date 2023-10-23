//fazer um menu

function cadastrarBike (vetor){ //essa função ela cadastra as bikes
    // aqui tinha um for, tem que tirar o for, pois ja tem o menu, vai cadastrar a bike somente quando o usuario digitar no menu
    let objeto = {
        marca: prompt("Informe a marca da bike"),
        modelo: prompt("Informe o modelo da bike"),
        quadro: parseInt(prompt("Informe o tamanho do quadro da bike")),
        aro: parseInt(prompt("Informe o tamanho do aro da bike")),
        ano: parseInt(prompt("Informe o ano da bike")),
        preco: parseFloat(prompt("Informe o preço da bike"))
    }
    vetor.push(objeto) 
    console.log('Bike inserida com sucesso')
}

function mediaBikes (vetor){ // média de preço das bikes
    let soma = 0
    for(let i=0;i<vetor.length;i++){ // sempre que tiver for, eu troco o i< que algum numero para i< vetor.length. vai percorrer ate o usuario ir digitando
        soma = soma + vetor[i].preco
    }  
    if (vetor.length ==0) {
        console.log(`Sem bikes no vetor`)
    } else{
    console.log(`Média de preço das bikes: ${soma/vetor.length}`)
    }
}

function bikeMaisAntiga(vetor){ // bike(s) mais antiga(s)
    let maisAntiga = []
    maisAntiga[0] = vetor[0] // atribui todo o objeto
    for(let i=1;i<vetor.length;i++){
        if (vetor[i].ano < maisAntiga[0].ano){
            maisAntiga = [] //   o vetor
            maisAntiga[0] = vetor[i]
        }
        else if (vetor[i].ano == maisAntiga[0].ano){
            maisAntiga.push(vetor[i]) // mais uma com o mesmo ano
        }
    }
    if (vetor.length ==0) {
        console.log(`Sem bikes no vetor`)
    } else{
    console.log(`A bike(s) mais antiga(s) é: ${maisAntiga}`)
    }
}

function bikeMarcaCaloi(vetor){ //bikes da marca Caloi
    let caloi = []
    for(let i=0;i<vetor.length;i++){
        if (vetor[i].marca == 'CALOI'){
            caloi.push(vetor[i])
        }
    }
    if (vetor.length ==0) {
        console.log(`Sem bikes no vetor`)
    } else{
    console.log(`As bikes da marca caloi é: ${caloi}`)
    }
}

function qntBikesAro29(vetor){ // qts bikes aro 29
    let aro29 = 0
    for(let i=0;i<vetor.length;i++){
        if (vetor[i].aro == 29){
        aro29++
        }
    }
    if (vetor.length ==0) {
        console.log(`Sem bikes no vetor`)
    } else{
    console.log(`Quantidade de bikes aro 29 é: ${aro29}`)
    }
}

function calculaBikeMaiorQuadro(vetor){ // qual bike possui maior quadro, desconsidere empates
    let maiorQuadro = vetor[0]
    for(let i=1;i<vetor.length;i++){
        if (vetor[i].quadro > maiorQuadro.quadro){
        maiorQuadro = vetor[i]
        }
    }
    if (vetor.length ==0) {
        console.log(`Sem bikes no vetor`)
    } else{
    console.log(`A bike de maior quadro é: ${maiorQuadro}`)
    }
}
function exercicioBike(){
    let vetor = []
    let opcao
    do{
        opcao = Number(prompt("Informe a opção escolhida: \n 1-Cadastrar produto \n 2- Preço da bike \n 3- Bike mais antiga \n 4- Bike da marca caloi \n 5- Quantidade de bike de aro 29 \n 6- Bike maior quadro \n 7- sair" ))
        switch(opcao){
            case 1: cadastrarBike(vetor); break
            case 2:mediaBikes(vetor); break
            case 3:bikeMaisAntiga(vetor); break
            case 4:bikeMarcaCaloi(vetor); break
            case 5:qntBikesAro29(vetor); break
            case 6:calculaBikeMaiorQuadro(vetor); break
            case 7: alert(`Programa será encerrado`); break
            default: alert("opção invalida");
        }
    }
    while( opcao!=7 )
}
