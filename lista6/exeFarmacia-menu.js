// fazer um menu

function cadastraFarmacias(farmacias){ // cadastra as farmácias
        let objeto = {
            codigo: parseInt(prompt(`Informe o código da farmácia`)),
            nome: prompt(`Informe o nome da farmácia`),
            endereco: prompt(`Informe o endereço da farmácia`)
        }
        while (farmacias.some( (item) => item.codigo == objeto.codigo )){
            objeto.codigo = parseInt(prompt(`Código já existente. Informe outro código`))
        }
        farmacias.push(objeto)
}

function cadastraRemedios(remedios, farmacias){ // cadastra os remédios
        let objeto = {
            codFarmacia: parseInt(prompt('Código da farmácia')),
            nome: prompt('Nome do remédio').toUpperCase(),
            qtde: parseInt(prompt('Qtde do remédio')),
            preco: parseFloat(prompt('Preço do remédio'))
        }
        while(!farmacias.some( (item) => item.codigo == objeto.codFarmacia)){
            objeto.codFarmacia = 
                    parseInt(prompt('Farmácia não existe. Informe novamente o código'))
        }
        let indice = remedios.findIndex( (item) => item.codFarmacia == objeto.codFarmacia && item.nome == objeto.nome)
        if (indice == -1){ // remedio não existe
            remedios.push(objeto) // insere remédio
        }
        else { // já existe, atualiza estoque
            remedios[indice].qtde = remedios[indice].qtde + objeto.qtde
        }
}

function realizaVendasDeRemedio(remedios){
        let venda = {
            farmacia: parseInt(prompt('Informe código da farmácia')),
            remedio: prompt('Informe nome do remédio').toUpperCase(),
            qtde: parseInt(prompt('Informe qtde para compra'))
        }
        // verifica se existem - some retorna true ou false
        if (remedios.some( (item) =>
            (item.codFarmacia == venda.farmacia && item.remedio == venda.remedio) )){
                // recupera o índice do remédio - findIndex retorna o índice do vetor
                let indice = remedios.findIndex((item => 
                  item.nome == venda.remedio && item.codFarmacia == venda.remedio))
                if (venda.qtde <= remedios[indice].qtde){
                    // atualiza o estoque
                    remedios[indice].qtde = remedios[indice].qtde - venda.qtde
                    alert('Venda realizada com sucesso')
                }
                else {
                    alert('Estoque insuficiente')
                }
        }
        else {
                alert('Farmácia ou remédio inexistente')
        }
}

let exeFarmacia =()=>{
    let farmacias =[]
    let remedios =[]
    let opcao
    do{
        Number(prompt("Informe a opção escolhida: \n 1-Cadastrar farmacias \n 2- cadastra remedios \n 3- vende remedios \n 4- sair" ))
        switch (opcao) {
           case 1: cadastraFarmacias(farmacias); break;
           case 2: cadastraRemedios(remedios, farmacias); break;
           case 3: realizaVendasDeRemedio(remedios); break;
           case 4: alert(`Programa encerrado`); break;
           default: alert("opção invalida");
        }
    }
    while (opcao!=7) 
}