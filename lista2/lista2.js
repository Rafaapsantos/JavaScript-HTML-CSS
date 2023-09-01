function exe5(){
    let escolha = Number(document.getElementById("opcao").value)
    let N1= Number(document.getElementById("N1").value)
    let N2= Number(document.getElementById("N2").value)
    let resultado = null
    switch (escolha) {
        case 1:
            resultado= (N1+N2)/2
            break;
        case 2:
            if (N1>=N2) {
                resultado =(N1-N2)
            }
            else{
                resultado = (N2-N1)
            }
            break;
        case 3:
            resultado= (N1*N2)
            break;
        case 4:
            if (N2 != 0) {
                resultado= (N1/N2)
            }else{
                alert("DIVISÃO POR 0 NÃO PODE")
            }
            break;
        default :
            alert("INVÁLIDO")
            break;
    }
    if (resultado != null) {
        document.getElementById("escolha").innerHTML=`O RESULTADO É : ${resultado}`
        
    } 
}
function exe1(){
    let N1 = Number(document.getElementById("N1").value)
    let N2 = Number(document.getElementById("N2").value)
    let N3 = Number(document.getElementById("N3").value)
    let N4 = Number(document.getElementById("N4").value)

    let result = (N1+N2+N3+N4)/4
    let classificacao = null
    if (result >= 7) {
        classificacao ="APROVADO"
    }else{
        classificacao= "REPROVADO"
    }
   
        document.getElementById("classificacao").innerHTML =`ESSE ALUNO ESTA : ${classificacao}`
        document.getElementById("resultado").innerHTML =`A MÉDIA DESSE ALUNO É : ${result}`
}
 function exe22(){
    let idade= Number(document.getElementById("idade").value)
    let peso = Number(document.getElementById("peso").value)
    let grupo = null
    if (idade<20) {
        if (peso<60) {
            grupo= 9
        }else if (peso>=60 && peso<= 90) {
            grupo=8
        }else{
            grupo=7
        }
    }else if (idade>=20 && idade<=50) {
        if (peso<60) {
            grupo= 6
        }else if (peso>=60 && peso<= 90) {
            grupo = 5
        }else{
            grupo= 4
        }
    }else{
        if (peso<60) {
            grupo= 3
        }else if (peso>=60 && peso<= 90) {
            grupo= 2
        }else{
            grupo= 1
        }
    }
    document.getElementById("verificar").innerHTML =`VOCÊ SE ENCAIXA NO GRUPO ${grupo}`
 }
 function exe23(){
    let cod = Number(document.getElementById("cod").value)
    let qnt = Number(document.getElementById("qnt").value)
    
    let precoUni = null
    if (cod>=1 && cod<=10) {
        precoUni =10
    }else if (cod>=11 && cod<=20) {
        precoUni=15
    }else if (cod>=21 && cod <=30) {
        precoUni=20
    }else if (cod>=31 && cod <=40) {
        precoUni=30
    }else{
        alert("CÓDIGO INVÁLIDO")
    }

    // CALCULO PRECO TOTAL 
    let precoTotal 
    if (precoUni!=null && qnt>=0) {
        precoTotal= qnt*precoUni
    }
    //CALCULO DO DESCONTO

    let desconto
    if (precoTotal<250) {
        desconto= precoTotal*5/100
    }else if (precoTotal>=250 && precoTotal <=500) {
        desconto= precoTotal*10/100
    }else{
        desconto= precoTotal*15/100
    }
    // calculo final 
    let precoFinal = precoTotal - desconto
    document.getElementById("precoUni").innerHTML =`PREÇO UNITÁRIO: ${precoUni}`
    document.getElementById("precoTotal").innerHTML =`PREÇO TOTAL DA NOTA: ${precoTotal}`
    document.getElementById("desconto").innerHTML =`VALOR DO DESCONTO: ${desconto}`
    document.getElementById("precoFinal").innerHTML =`PREÇO FINAL: ${precoFinal}`

 }
 function exe24(){
    let preco = Number(document.getElementById("preco").value)
    let categ = Number(document.getElementById("categ").value)
    let situacao = Number(document.getElementById("situacao").value)
    
    let valorAumento 
    if (preco>0 && preco<=25) {
        if (categ==1) {
            valorAumento=preco*(5/100)
        }
        else if (categ==2) {
            valorAumento=preco*(8/100)
        }else if (categ==3) {
            valorAumento=preco*(10/100)
        }else{
            alert("CATEGORIA INVÁLIDA")
        }
    }else if (preco>0 && preco>25) {
        if (categ==1) {
            valorAumento=preco*(12/100)
        }else if (categ==2) {
            valorAumento= preco*(15/100)
        }else if (categ==3) {
            valorAumento=preco*(18/100)
        }else{
            alert("CATEGORIA INVÁLIDA")
        }
    }else{
        alert("PREÇO INVÁLIDO, SOMENTE VALORES POSITIVOS")
    }
    let imposto 
    if (categ==2 || situacao=="r") {
        imposto=preco*(5/100)
    }else{
        imposto=preco*(8/100)
    }
    let novoPreco
    novoPreco= (preco+valorAumento-imposto).toFixed(2)
    let classif
    if (novoPreco>0 && novoPreco<=50) {
        classif= "BARATO"
    }else if (novoPreco>50 && novoPreco<120) {
        classif="NORMAL"
    }else if (novoPreco>=120) {
        classif="CARO"
    }else{
        alert("ALGO ESTA ERRADO")
    }
    document.getElementById("valorAumento").innerHTML =`VALOR DE AUMENTO: ${valorAumento}`
    document.getElementById("imposto").innerHTML =`VALOR DO IMPOSTO: ${imposto}`
    document.getElementById("novoPreco").innerHTML =`NOVO PREÇO: ${novoPreco}`
    document.getElementById("classif").innerHTML =`CLASSIFICAÇÃO: ${classif}`
 }
 function exe15(){
    let descricao = Number(document.getElementById("descricao").value)
    let valor = Number(document.getElementById("valor").value)
    let rendimento
    if (descricao==1) {
        rendimento= valor*(3/100)
    }else if (descricao==2) {
        rendimento= valor*(4/100)
    }else{
        alert("INVÁLIDO")
    }
    let valorCorrigido
    valorCorrigido= valor+rendimento
    document.getElementById("valorCorrigido").innerHTML=`O VALOR DEPOIS DE 1 MÊS INVESTIDO É DE ${valorCorrigido}`
 }
 function exe16(){
    let valor  = Number(document.getElementById("valor").value)
    let cod = Number(document.getElementById("cod").value)
    let desconto
    if (valor<30) {
        desconto= 0
    }else if (valor >=30 && valor<=100) {
        desconto=valor*(10/100)
    }else if (valor>100) {
        desconto= valor*(15/100)
    }else{
        alert("NÃO PODE NÚMEROS NEGATIVOS")
    }
    let novoPreco
    novoPreco= valor-desconto
    document.getElementById("desconto").innerHTML =`O VALOR DE DESCONTO É: R$${desconto},00`
    document.getElementById("novoPreco").innerHTML =`O NOVO PREÇO É: R$${novoPreco},00`
 }
 function exe17(){
    let senha  = Number(document.getElementById("senha").value)
    let validacao
    if (senha==4531) {
        validacao= "PERMISSÃO DE ACESSO ACEITA!"
    }else{
        validacao= "PERMISSÃO DE ACESSO NEGADA, TENTE NOVAMENTE!"
    }
    document.getElementById("entrar").innerHTML =`${validacao}`
 }
 function exe18(){
    let idade = Number(document.getElementById("idade").value)
    let mensagem
    if (idade>0 && idade <=17) {
        mensagem= "VOCÊ É DE MENOR"
    }else if (idade >=18) {
        mensagem= "VOCÊ É DE MAIOR"
    }else{
        mensagem= "IDADES NEGATIVAS NÃO EXISTEM, TENTE NOVAMENTE"
    }
    document.getElementById("respostas").innerHTML=`${mensagem}`
 }
 function exe19(){
    let altura = Number(document.getElementById("altura").value)
    let sexo = Number(document.getElementById("sexo").value)
    let pesoIdeal
    if (altura>0) {
        if (sexo=="m") {
            pesoIdeal= ((72.7*altura)-58).toFixed(2)
        }else{
            pesoIdeal=((62.1*altura)-44.7).toFixed(2)
        } 
    }else{
        alert("TENTE NOVAMENTE")
    }
    
    document.getElementById("respostas").innerHTML=`O SEU PESO IDEAL É ${pesoIdeal} KG`
 }
 function exe20(){
    let idade = Number(document.getElementById("idade").value)
    let mensagem
    if (idade>=5 && idade <=7) {
        mensagem ="INFANTIL"
    }else if (idade>=8 && idade <=10) {
        mensagem ="JUVENIL"
    }else if (idade>=11 && idade <=15) {
        mensagem ="ADOLESCENTE"
    }else if (idade>=16 && idade <=30) {
        mensagem ="ADULTO"
    }else if (idade>30) {
        mensagem ="SÊNIOR"
    }else if (idade> 0 && idade<5) {
        mensagem="CRIANÇA"
    }else{
        alert("NÃO EXISTE IDADES NEGATIVAS")
    }
    document.getElementById("respostas").innerHTML=`A SUA CATEGORIA É ${mensagem}`
 }
 function exe21(){
    let valor  = Number(document.getElementById("valor").value)
    let cod = Number(document.getElementById("cod").value)
    let proced
    if (cod==1) {
        proced="SUL"
    }else if (cod==2) {
        proced="NORTE"
    }else if (cod==3) {
        proced="LESTE"
    }else if (cod==4) {
        proced="OESTE"
    }else if (cod==5 || cod==6) {
        proced="NOROESTE"
    }else if (cod==7 || cod==8 || cod==9) {
        proced="SUDESTE"
    }else if (cod>=10 && cod<=20) {
        proced="CENTRO-OESTE"
    }else if (cod>=21 && cod<=30) {
        proced="NORDESTE"
    }else{
        alert("CÓDIGO INVÁLIDO")
    }
    document.getElementById("respostas").innerHTML=`A PROCEDÊNCIA DO PRODUTO É ${proced}`
}
function exe25(){
    let extra  = Number(document.getElementById("extra").value)
    let falta = Number(document.getElementById("falta").value)
    let h
    let premio
    h= (extra-(2/3*(falta)))*60
    if (h>=2400) {
       premio= 500 
    }else if (h>=1800 && h<2400) {
        premio= 400
    }else if (h>=1200 && h<1800) {
        premio= 300
    }else if (h>=600 && h<1200) {
        premio= 200
    }else if (h<600) {
        premio= 100
    }else{
        alert("TENTE NOVAMENTE")
    }
    document.getElementById("respostas").innerHTML=`A SUA GRATIFICAÇÃO É R$${premio},00`
}