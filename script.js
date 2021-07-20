function clicar() {
    let produto = prompt('Qual é o produto que você está comprando?')
    if (produto == 0) {
        alert('Por favor, insira o nome de um produto.')
    } else {
        let precoProduto = prompt('Qual é o preço de(o, a) ' + produto + '?')
        if (precoProduto == 0) {
            alert('Por favor, insira o preço.')
        } else {
            let precoProdutoReal = Number(precoProduto)
            if (isNaN(precoProdutoReal)) {
                alert('Preço informado inválido.')
            } else {
                let conteudo = document.getElementById('secao')
                conteudo.innerHTML = `<h2>Calculando desconto de 10% para ${produto}...</h2>`

                conteudo.innerHTML += `<p class="paragrafos">O preço original era R$ ${precoProdutoReal.toLocaleString()}.</p>`

                let desconto = precoProdutoReal * 0.1
                conteudo.innerHTML += `<p class="paragrafos">Você acaba de ganhar R$ ${desconto.toLocaleString()} de desconto (-10%).</p>`

                let precoProdutoFinal = precoProdutoReal - desconto
                conteudo.innerHTML += `<p class="paragrafos">No fim, você vai pagar R$ ${precoProdutoFinal.toLocaleString()} no produto ${produto}.</p>`
            }
        }
    }
}