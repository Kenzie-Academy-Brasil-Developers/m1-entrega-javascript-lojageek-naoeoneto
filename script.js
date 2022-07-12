let listPainting = [];
let listFigure = [];
let secaoListPainting = document.querySelector(".produto_card_paint");
let secaoListFigure = document.querySelector(".produto_card_fig");

function createPaintingItem(arr){
  for(let i = 0; i < arr.length; i++){
  if(arr[i].tipo == "painting"){
      listPainting.push(arr[i])
  }
} return listPainting
};

function createActionItem(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i].tipo == "action figure"){
        listFigure.push(arr[i])
    } 
  } return listFigure
};

console.log(createPaintingItem(itens));
console.log(createActionItem(itens));

function listarProdutosPainting(arr){
  for(let i = 0; i < arr.length; i++){
    let produto = arr[i]
    let cardPainting = cardProdutoPainting(produto)
    secaoListPainting.appendChild(cardPainting)
  }
}

console.log(listarProdutosPainting(listPainting));

function cardProdutoPainting(produto){
    let nome = produto.nome
    let preco = produto.preco
    let imagemProduto = produto.imagemProduto

    let elementoLista = document.createElement('li')
    let elementoImagem = document.createElement('img')
    let elementoNome = document.createElement('span')
    let elementoPreco = document.createElement('p')      

    elementoImagem.src = `./assets/img/Painting/${imagemProduto}`
    elementoImagem.class = "produto_card_img"
    elementoNome.innerText = `${produto.nome}`
    elementoNome.alt = nome
    elementoPreco.innerText = preco
    
    elementoLista.appendChild(elementoImagem)
    elementoLista.appendChild(elementoNome)
    elementoLista.appendChild(elementoPreco)
   
    console.log(nome)
    console.log(elementoImagem)
    console.log(elementoNome)
    console.log(elementoPreco)
    return elementoLista
}


function listarProdutosFigure(arr){
  for(let i = 0; i < arr.length; i++){
    let produto = arr[i]
    let cardFigure = cardProdutoFigure(produto)
    secaoListFigure.appendChild(cardFigure)
  }
}

console.log(listarProdutosFigure(listFigure));

function cardProdutoFigure(produto){
    let nome = produto.nome
    let preco = produto.preco
    let imagemProduto = produto.imagemProduto

    let elementoLista = document.createElement('li')
    let elementoImagem = document.createElement('img')
    let elementoNome = document.createElement('span')
    let elementoPreco = document.createElement('p')      

    elementoImagem.src = `./assets/img/actions/${imagemProduto}`
    elementoImagem.class = "produto_card_img"
    elementoNome.innerText = `${produto.nome}`
    elementoNome.alt = nome
    elementoPreco.innerText = preco

    elementoLista.appendChild(elementoImagem)
    elementoLista.appendChild(elementoNome)
    elementoLista.appendChild(elementoPreco)
    
    console.log(nome)
    console.log(elementoImagem)
    console.log(elementoNome)
    console.log(elementoPreco)
    return elementoLista
}