import criarDiaDaSemana from "./criarDiaDaSemana.js";
const inputItem = document.getElementById("input-item");
let contador = 0;
import { atualizarVisibilidadeComprados } from "../index.js";
import verificarListaVazia from "./verificarListaVazia.js";

export function criarItemDalista (moverParaComprados){
    
    if (inputItem.value === "") {
        alert("Por favor, insira um item!");
        return;
    }

    // Criando os elementos
    const itemDaLista = document.createElement("li");
    const containerItemDaLista = document.createElement("div");
    containerItemDaLista.classList.add("lista-item-container");

    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = "checkbox-" + contador++;

    const nomeItem = document.createElement("p");
    nomeItem.innerText = inputItem.value;

    const iconeLixo = document.createElement ("i");
    iconeLixo.classList.add ("icone-lixo");
    const iconeEditar = document.createElement("i");
    iconeEditar.classList.add ("icone-editar");

    const containerBotoes = document.createElement ("div");
    containerBotoes.classList.add ("container-botoes");

    

    containerItemDaLista.appendChild(inputCheckbox);
    containerItemDaLista.appendChild(nomeItem);

    containerBotoes.appendChild (iconeLixo);
    containerBotoes.appendChild(iconeEditar);

    containerItemDaLista.appendChild (containerBotoes)
    itemDaLista.appendChild(containerItemDaLista);


    const diaDaSemana = criarDiaDaSemana()

    itemDaLista.appendChild(diaDaSemana);

    // Limpando o campo de input após adicionar o item
    inputItem.value = "";

    // Riscando item da lista
    inputCheckbox.addEventListener ("click", function(){
        if(inputCheckbox.checked){
            nomeItem.style.textDecoration = "line-through";
        } else{
            nomeItem.style.textDecoration = "none";
        }
    })

    iconeLixo.addEventListener("click", () => {
        excluirItem(itemDaLista)
        verificarListaVazia(itemDaLista)
    })

      // Função para riscar o item e movê-lo para "Comprados"
  if (moverParaComprados) {
    moverParaComprados(itemDaLista, inputCheckbox);
  }

    return itemDaLista
}

export function excluirItem(item){
    item.remove()
    atualizarVisibilidadeComprados()
}