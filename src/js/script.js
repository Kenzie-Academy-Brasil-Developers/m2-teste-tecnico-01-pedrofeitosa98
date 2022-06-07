// nome, idade, bio, urlimage

function criarCard(pessoa) {
    const cardItem = document.createElement('li')

    cardItem.classList.add('card')
    
    const cardImage = criarHeader(pessoa)
    const cardMain = criarMain(pessoa)

    cardItem.append(cardImage, cardMain)

    return cardItem
}

function criarHeader(pessoa) {
    const cardImage = document.createElement('img')
    cardImage.src = pessoa.urlImage

    return cardImage
}

function criarMain(pessoa) {
    const main = document.createElement('div')
    const nome = document.createElement('h2')
    const idade = document.createElement('h3')
    const bio = document.createElement('p')

    nome.innerText = pessoa.nome
    idade.innerText = pessoa.idade
    bio.innerText = pessoa.bio

    main.append(nome, idade, bio)

    return main
}

function montarLista(pessoas) {
    const cardContainer = document.querySelector(".container")
    pessoas.forEach((pessoa) => {
        cardContainer.append(criarCard(pessoa))
    })
}

console.log(montarLista(pessoas))