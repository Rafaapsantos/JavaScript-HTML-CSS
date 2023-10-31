function lerMatriz(matriz, meses){
    for (let i = 0; i < 12; i++) {
        matriz[i]=[]
        for (let j = 0; j < 4; j++) {
            matriz[i][j]= parseFloat(((Math.random()*100)+1).toFixed(2))
        }
    }
}

function mostraMatriz(matriz){
    console.log(matriz)
}

function totalVendidoPorMes(matriz, meses){
    for (let i = 0; i < 12; i++) {
        let soma=0
        for (let j = 0; j < 4; j++) {
            soma = soma + matriz[i][j]
        }
        console.log(`No mês de ${meses[i]} a loja vendeu ${(soma).toFixed(2)}`)
    }
}

function totalVendidoPorSemana(matriz){
    for (let j = 0; j < 4; j++) {
        let soma=0
        for (let i = 0; i < 12; i++) {
            soma = soma + matriz[i][j]
           
        } 
        console.log(`A soma da semana ${j+1} é de: ${(soma).toFixed(2)}`)
    } 
}

function totalVendidoPorAno(matriz){
    let soma =0
    for (let i = 0; i < 12; i++) {
        for (let j = 0; j < 4; j++) {
            soma= soma+ matriz[i][j]
        }
    }
    console.log(`A soma total do ano é de ${(soma).toFixed(2)}`)
}

function principal(){
    let meses =["JANEIRO", "FEVEREIRO", "MARÇO", "ABRIL", "MAIO", "JUNHO", "JULHO", "AGOSTO", "SETEMBRO", "OUTUBRO", "NOVEMBRO", "DEZEMBRO"]
    let matriz=[]
    lerMatriz(matriz, meses)
    mostraMatriz(matriz)
    totalVendidoPorMes(matriz,meses)
    totalVendidoPorSemana(matriz)
    totalVendidoPorAno(matriz)
}
principal()