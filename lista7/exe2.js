function lerMatriz(matriz){
    for(let i=0; i<2; i++){
        matriz[i]=[]
        for(let j=0; j<4; j++){
            matriz[i][j]= parseInt((Math.random()*20)+1) 
        }
    }
}

function mostraMatriz(matriz){
    console.log(matriz)
}

function CalculaMatriz10e20(matriz){  
    for(let i=0; i<2; i++){
        let qnt=0
        for(let j=0; j<4; j++){
            if (matriz[i][j]>=10 && matriz[i][j]<=20) {
                qnt++
            }  
        }
        console.log(`A quantidade de números de 10 a 20 da linha ${i+1} é ${qnt}`)
    }
}

function mediaElementosPares(matriz){
    let soma=0
    let qnt=0
    for(let i=0; i<2; i++){
        for(let j=0; j<4; j++){
            if (matriz[i][j] %2 == 0) {
                soma = soma +matriz[i][j]
                qnt++
            }
        }
    }
       let media=(soma/qnt).toFixed(2)
       console.log(`A media é: ${media}`)
}

function principal(){
let matriz=[]
lerMatriz(matriz)
mostraMatriz(matriz)
CalculaMatriz10e20(matriz)
mediaElementosPares(matriz)
}