function exe1(){
// recupera os dados do html
let nro1= document.getElementById("nro1").value
let nro2= document.getElementById("nro2").value
// calcula a subtração
let subtracao = nro1 - nro2
// Envia o resultado para o html 
document.getElementById("subtracao").innerHTML = `A SUBTRAÇÃO É: ${subtracao}`
}

function exe2(){
let N1= document.getElementById("N1").value
let N2= document.getElementById("N2").value
let N3= document.getElementById("N3").value
let multiplicacao = N1*N2*N3
document.getElementById("multiplicacao").innerHTML= `A MULTIPLICAÇÃO DOS TRÊS NÚMEROS É :${multiplicacao} `
}
function exe3(){
    let N1= document.getElementById("N1").value
    let N2= document.getElementById("N2").value
    let divisao= N1/N2
    if (N2<=0) {
        alert("você pode digitar somente números positivos!")
    } else {
        document.getElementById("divisao").innerHTML= `A DIVISÃO É:${divisao} `
    }
}
function exe4(){
    let N1= document.getElementById("N1").value
    let N2= document.getElementById("N2").value
    let media = (N1*2 + N2*3)/2
    document.getElementById("media").innerHTML = `A MÉDIA PONDERADA DESSAS NOTAS É : ${media}`
}
function exe5(){
    let N1= document.getElementById("N1").value
    let desconto = N1-(N1*(10/100))
    document.getElementById("desconto").innerHTML = `COM O DESCONTO DE 10% O PRODUTO FICOU NO VALOR DE : ${desconto}`
}
function exe6(){
    let N1= Number(document.getElementById("N1").value)
    let N2= Number(document.getElementById("N2").value)
    let comissao = N2*0.04
    let salarioTotal = N1+comissao
    document.getElementById("comissao").innerHTML = `A COMISSÃO DESSE FUNCIONÁRIO É: ${comissao}`
    document.getElementById("salarioTotal").innerHTML = `O SALÁRIO TOTAL DESSE FUNCIONÁRIO É : ${salarioTotal}`

}
function exe7(){
    let N1= Number(document.getElementById("N1").value)
    let engordar= N1+(N1*0.15)
    let emagrecer = N1-(N1*0.20)
    document.getElementById("engordar").innerHTML = `O NOVO PESO DA PESSOA SE ELA ENGORDAR É : ${engordar}`
    document.getElementById("emagrecer").innerHTML = `O NOVO PESO DA PESSOA SE ELA EMAGRECER É : ${emagrecer}`
}
function exe8(){
    let N1= Number(document.getElementById("N1").value)
    let gramas = N1*1000
    document.getElementById("gramas").innerHTML = `O PESO DA PESSOA EM GRAMAS É : ${gramas}`
}
function exe9(){
    let N1= Number(document.getElementById("N1").value)
    let N2= Number(document.getElementById("N2").value)
    let N3= Number(document.getElementById("N3").value)
    let area= ((N1+N2)*N3)/2
    document.getElementById("area").innerHTML = `A ÁREA DO TRAPÉZIO É : ${area}`
}
function exe10(){
    let N1= Number(document.getElementById("N1").value)
    let area = N1*N1
    document.getElementById("area").innerHTML = `A ÁREA DO QUADRADO É : ${area}`

}

