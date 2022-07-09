// Cada item tem imagem, nome, valor

let item = [
    {
    id: 01,
    nome: "Anime Woman",
    valor: "R$50,00",
    tipo: "action figure",
    },

    {
    id: 02,
    nome: "Dragon Ball Personagem",
    valor: "R$80,00",
    tipo: "action figure",
    },

    {
    id: 03,
    nome: "Star Wars Personagem",
    valor: "R$75,00",
    tipo: "action figure",
    },

    {
    id: 04,
    nome: "Clock",
    valor: "R$36,00",
    tipo: "painting",
    },

    {
    id: 05,
    nome: "Gamepad",
    valor: "R$47,00",
    tipo: "painting",
    },

    {
    id: 06,
    nome: "Personagem",
    valor: "R$46,00",
    tipo: "painting",
    }
]
let listFigure = [];
let listPainting = [];

function createActionItem(objeto){
    for(let i = 0; i < item.length; i++){
        if(objeto[i].tipo == "action figure"){
        listFigure.push(objeto[i])
    } 
  } return listFigure
};

function createPaintingItem(objeto){
    for(let i = 0; i < item.length; i++){
    if(objeto[i].tipo == "painting"){
        listPainting.push(objeto[i])
    }
  } return listPainting
};

console.log(createActionItem(item));
console.log(createPaintingItem(item));