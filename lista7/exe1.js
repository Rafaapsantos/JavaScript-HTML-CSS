 function lerMatriz(matriz){
    for(let i =0; i<3; i++){
        matriz[i]=[]
        //alert(`Informe elementos da linha ${i+1}`)
        for(let j =0; j<5; j++){
            //matriz[i][j]= parseInt(prompt(`Informe um número inteiro para coluna ${j+1}`)) 
            // pode usar assim tbm =  
            matriz[i][j]= parseInt((Math.random()*20)+1) 
            //---> gera número de 1 a 20
        }
    }

 }

 function mostrarMatriz(matriz){
    console.log(matriz)
 }

function CalculaMatriz(matriz){
    let qnt = 0
    for(let i =0; i<3; i++){
        for(let j =0; j<5; j++){
            if (matriz[i][j]>=15 && matriz[i][j]<=20) {
                qnt++
            }
        }
    }
    console.log(`A quantidade de números entre 15 e 20 è: ${qnt}`) 
}

function principal(){
let matriz=[]
lerMatriz(matriz)
mostrarMatriz(matriz)
CalculaMatriz(matriz)
}