function exe1 () {
  let cont2 = 1

  while (cont2 <= 5) {
    let a = Number(prompt('informe o valor de A'))
    let b = Number(prompt('informe o valor de B'))
    let c = Number(prompt('informe o valor de C'))
    let d = Number(prompt('informe o valor de D'))

    alert(`Ordem digitada: ${a},${b},${c},${d} `)

    let cont = 1

    while (cont <= 3) {
      //troca a com b
      if (a > b) {
        let aux = a
        a = b
        b = aux
      }

      if (b > c) {
        //troca b com c
        let aux = b
        b = c
        c = aux
      }

      if (c > d) {
        //troca c com d
        let aux = c
        c = d
        d = aux
      }

      cont++
    } // fecha while

    alert(`Ordem crescente: ${a},${b},${c},${d} `)
    alert(`Ordem decrescente: ${d},${c},${b},${a} `)

    cont2++
  } // fecha while
}

function exe2 () {

  let qnt = 120
  const custo = 200
  let corpo = ``

  for (let preco = 5; preco >= 1; preco = preco - 0.5) {
    let lucro = preco * qnt - custo
    corpo =
      corpo +
      `<tr> <td> ${preco.toFixed(
        2
      )} </td> <td> ${qnt} </td> <td> ${custo.toFixed(
        2
      )}</td> <td>${lucro.toFixed(2)} </td> </tr>`
    qnt = qnt + 26
  }
  document.getElementById('corpo').innerHTML = corpo
}

function exe3 () {

  acm1 = 0
  acm2 = 0
  acm3 = 0
  acm4 = 0
  acm5 = 0

  for (let pessoas = 1; pessoas <= 8; pessoas++) {
    //verifca a quantidade de pessoa em cada faixa etaria
    let idade = Number(prompt('informe a sua idade:'))

    if (idade > 0 && idade <= 15) {
      acm1 = acm1 + 1
    } else if (idade >= 16 && idade <= 30) {
      acm2 = acm2 + 1
    } else if (idade >= 31 && idade <= 45) {
      acm3 = acm3 + 1
    } else if (idade >= 46 && idade <= 60) {
      acm4 = acm4 + 1
    } else if (idade > 60) {
      acm5 = acm5 + 1
    } else {
      alert('NÃO EXISTE IDADES NEGATIVAS!!')
    }
  }

  let porc1
  porc1 = (acm1 * 100) / 8

  let porc5
  porc5 = (acm5 * 100) / 8

  document.getElementById('1').innerHTML = `1° FAIXA ETÁRIA:${acm1} PESSOAS`
  document.getElementById('2').innerHTML = `2° FAIXA ETÁRIA:${acm2} PESSOAS`
  document.getElementById('3').innerHTML = `3° FAIXA ETÁRIA:${acm3} PESSOAS`
  document.getElementById('4').innerHTML = `4° FAIXA ETÁRIA: ${acm4} PESSOAS`
  document.getElementById('5').innerHTML = `5° FAIXA ETÁRIA:${acm5} PESSOAS`
  document.getElementById('porc1').innerHTML = `PORCENTAGEM DA 1° FAIXA ETÁRIA:${porc1}% `
  document.getElementById('porc5').innerHTML = `PORCENTAGEM DA 5° FAIXA ETÁRIA:${porc5}%`
}

function exe4 () {
  let numero = Number(prompt('DIGITE UM NUMERO PARA CALCULAR A TABUADA:'))
  let corpo = ''
  for (let num = 0; num <= 10; num++) {
    corpo =
      corpo +
      `<tr> 
          <td> ${numero} X </td> 
          <td> ${num} = </td> 
          <td> ${num * numero}</td>
        </tr>`
  }
  document.getElementById('corpo').innerHTML = corpo
}

function exe5 () {
  let corpo = ''

  for (let num = 1; num <= 10; num++) {
    corpo =
      corpo +
    ` <tr> 
        <td> Tabuada </td> 
        <td> do </td> 
        <td> ${num}</td>
      </tr>`

    for (let aux = 1; aux <= 10; aux++) {
      corpo =
        corpo +
        `
            <tr> 
            <td> ${num} x </td> 
            <td> ${aux} </td> 
            <td> = ${num * aux}</td>
            </tr>`
    }
  }
  document.getElementById('corpo').innerHTML = corpo
}

function exe6 () {
  let acmPrazo = 0
  let acmVista = 0
  let acmTotal = 0
  let acmPrimeiraParcela = 0

  for (let transacao = 1; transacao <= 15; transacao++) {
    let codigo = String(prompt('DIGITE O CÓDIGO:')).toLowerCase()
    let valor = Number(prompt('DIGITE O VALOR DA TRANSAÇÃO:'))

    if (codigo == 'v') {
      acmVista = acmVista + valor
    } else if (codigo == 'p') {
      let primeiraParcela = valor / 3

      acmPrazo = acmPrazo + valor
      acmPrimeiraParcela = primeiraParcela + acmPrimeiraParcela
    } else {
      alert('NÃO PODE NÚMEROS NEGATIVOS, TENTE NOVAMENTE')
    }
  }
  acmTotal = (acmPrazo + acmVista).toFixed(2)

  document.getElementById('valorV').innerHTML = `O valor total das compras à vista é: ${acmVista}`
  document.getElementById('valorP').innerHTML = `O valor total das compras a prazo é: ${acmPrazo}`
  document.getElementById('valorT').innerHTML = `O valor total das compras é: ${acmTotal}`
  document.getElementById('valorPrimeira').innerHTML = `O valor da primeira prestação das compras a prazo juntas: ${acmPrimeiraParcela}`
}

function exe7 () {
  let qntPessoasMaiorCinquenta = 0
  let qntPessoasMaiorDezMenorVinte = 0
  let alturaParaMedia = 0
  let qntPessoasMenorQuarenta = 0

  for (let pessoas = 1; pessoas <= 5; pessoas++) {
    let idade = Number(prompt('DIGITE A SUA IDADE:'))
    let altura = Number(prompt('DIGITE A SUA ALTURA:'))
    let peso = Number(prompt('DIGITE O SEU PESO:'))

    if (idade <= 0 || altura <= 0 || peso <= 0) {
      alert('NÃO PODE NÚMEROS NEGATIVOS, TENTE NOVAMENTE')
    }
    if (idade > 50) {
      qntPessoasMaiorCinquenta = qntPessoasMaiorCinquenta + 1
    } else if (idade >= 10 && idade <= 20) {
      qntPessoasMaiorDezMenorVinte = qntPessoasMaiorDezMenorVinte + 1
      alturaParaMedia = alturaParaMedia + altura
    }
    if (peso < 40) {
      qntPessoasMenorQuarenta = qntPessoasMenorQuarenta + 1
      porcentagemPessoasPeso = (qntPessoasMenorQuarenta * 100) / 5
    }
  }
  let media = alturaParaMedia / qntPessoasMaiorDezMenorVinte

  document.getElementById('qntPessoas').innerHTML = ` A quantidade de pessoas com idade maior que 50 é: ${qntPessoasMaiorCinquenta}`
  document.getElementById('media').innerHTML = `A média das alturas das pessoas com idade entre 10 e 20 é: ${media}`
  document.getElementById('porcentagem').innerHTML = `A porcentagem de pessoas com peso menor que 40: ${porcentagemPessoasPeso}`
}

function exe8 () {
  let qntSuperiorCinquentaInferiorSessenta = 0
  let qntAlturaInferior = 0
  let somaIdades = 0
  let qntPessoasRuivas = 0
  let qntPessoasOlhosAzuis = 0
  let porcPessoasOlhosAzuis
  let media

  for (let pessoas = 1; pessoas <= 6; pessoas++) {
    let idade = Number(prompt('DIGITE A SUA IDADE:'))
    let altura = Number(prompt('DIGITE A SUA ALTURA:'))
    let peso = Number(prompt('DIGITE O SEU PESO:'))
    let corCabelo = String(prompt('DIGITE A COR DO SEU CABELO, DE ACORDO COM A DESCRIÇÃO ABAIXO:')).toLowerCase()
    let corOlhos = String(prompt('DIGITE A COR DO SEUS OLHOS, DE ACORDO COM A DESCRIÇÃO ABAIXO:')).toLowerCase()

    if (idade <= 0 || altura <= 0 || peso <= 0) {
      alert('NÚMEROS NEGATIVOS NÃO PODE,TENTE NOVAMENTE')
    }

    if (idade > 50 && peso < 60) {
      qntSuperiorCinquentaInferiorSessenta =qntSuperiorCinquentaInferiorSessenta + 1
    }

    if (altura < 150) {
      qntAlturaInferior = qntAlturaInferior + 1
      somaIdades = somaIdades + idade
    }

    if (corOlhos == 'a') {
      qntPessoasOlhosAzuis = qntPessoasOlhosAzuis + 1
    } else {
      if (corCabelo == 'r') {
        qntPessoasRuivas = qntPessoasRuivas + 1
      }
    }
  }
  media = somaIdades / qntAlturaInferior
  porcPessoasOlhosAzuis = (qntPessoasOlhosAzuis * 100) / 6

  document.getElementById('qntPessoas').innerHTML = ` A quantidade de pessoas com idade maior que 50 e peso menor que 60kg é: ${qntSuperiorCinquentaInferiorSessenta}`
  document.getElementById('media').innerHTML = `A média das idades das pessoas com altura inferior a 1,50m é: ${media}`
  document.getElementById('porcentagem').innerHTML = `A porcentagem de pessoas com olhos azuis é: ${porcPessoasOlhosAzuis}`
  document.getElementById('qntRuivas').innerHTML = `A quantidade de pessoas ruivas e que não possuem olhos azuis é: ${qntPessoasRuivas}`
}

function exe9 () {
  let acumuladorIdades = 0
  let qntPessoas = 0
  let qntPorcentagem = 0
  let porcentagem
  let media

  for (let pessoas = 1; pessoas <= 10; pessoas++) {
    let idade = Number(prompt('DIGITE A SUA IDADE:'))
    let peso = Number(prompt('DIGITE O SEU PESO:'))
    let altura = Number(prompt('DIGITE A SUA ALTURA:'))

    acumuladorIdades = acumuladorIdades + idade

    if (peso > 90) {
      if (altura < 150) {
        qntPessoas = qntPessoas + 1
      }
    }

    if (idade >= 10 && idade <= 30) {
      if (altura > 190) {
        qntPorcentagem = qntPorcentagem + 1
      }
    }
  }
  porcentagem = (qntPorcentagem * 100) / 10
  media = acumuladorIdades / 10

  document.getElementById('media').innerHTML = `A média das idades das pessoas é: ${media}`
  document.getElementById('qntPessoas').innerHTML = ` A quantidade de pessoas com peso maior que 90kg e altura menor que 150m é: ${qntPessoas}`
  document.getElementById('porcentagem').innerHTML = `A porcentagem de pessoas com idade entre 10 e 30 anos entre as pessoas que medem mais de 1,90m é: ${porcentagem}`
}
function exe10 () {
  let num
  let numeroPar = 0
  let numeroPrimo = 0
  let divisores

  for(let cont = 1; cont <= 10; cont++){
      divisores = 0
      num = Number(prompt('Digite um Numero:'))

      if(num % 2 == 0){
          numeroPar = numeroPar + num
      }
      
      if(num != 1){
          for(let cont1 = 0; cont1 <= num; cont1++){
              if (num % cont1 == 0){
                  divisores++
              }
          }
          if(divisores == 2){
              numeroPrimo = numeroPrimo + num
          }
      }else{
          numeroPrimo = numeroPrimo + num
      }
      
  }
  document.getElementById('pares').innerHTML = `A soma dos números pares é: ${numeroPar}`
  document.getElementById('primos').innerHTML = ` A soma dos números primos é: ${numeroPrimo}`
  }

  

