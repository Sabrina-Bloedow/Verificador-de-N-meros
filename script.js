var numeros = []
var soma = 0
let tab = document.getElementById('vertab') 

function adicionar() {
    let n = parseInt(document.getElementById('txtnum').value) /*1n */
    if (isNaN(n)){
        alert(`Digite um número para adicionar!`)
    } else {
        let item = document.createElement('option')
        item.text = `Valor ${n} foi adicionado.`
        tab.appendChild(item)
        res.innerHTML = ''
        numeros.push(n)
        soma += n
        txtnum.value = ''
    }
}

function finalizar() {
    if (numeros.length === 0) {
        alert('Adicione números a tabela para finalizar!')
    } else {
        let res = document.getElementById('res')
        res.innerHTML = `O valor máximo adicionado foi:  ${Math.max(...numeros)};<br>`
        res.innerHTML += `O valor mínimo adicionado foi:  ${Math.min(...numeros)};<br>`
        res.innerHTML += `Ao todo, foram cadastrados ${numeros.length} números;<br>`
        res.innerHTML += `A soma de todos os valores é:  ${soma};<br>`
        res.innerHTML += `A média dos valores digitados é:  ${(soma/numeros.length).toFixed(1)}.`
    }
}

function limpar() {
    tab.innerHTML = ''
    tab.style.width = '232px';
    numeros = []
    soma = 0
    res.innerHTML = ''
}