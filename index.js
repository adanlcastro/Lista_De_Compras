import { criarItemDalista } from "./scripts/criarItemDaLista.js";
import verificarListaVazia from "./scripts/verificarListaVazia.js";
import { excluirItem } from "./scripts/criarItemDaLista.js";

const listaDeCompras = document.getElementById("lista-de-compras");
const botaoAdicionar = document.getElementById("adicionar-item");
const containerLista = document.querySelector('.container-lista');

// Criando a seção "Comprados"
const tituloComprados = document.createElement("h2");
tituloComprados.innerText = "Comprados";
tituloComprados.style.display = "none"; // Inicialmente oculto

const traco = document.createElement("hr");
const listaComprados = document.createElement("ul");
listaComprados.id = "lista-comprados";
traco.style.display = "none"
listaComprados.style.display = "none"; // Inicialmente oculto

containerLista.appendChild(tituloComprados);
containerLista.appendChild(traco);
containerLista.appendChild(listaComprados);




botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault();

    const itemDaLista = criarItemDalista(moverParaComprados)
    listaDeCompras.appendChild(itemDaLista);

    verificarListaVazia(listaDeCompras)
});



function moverParaComprados (item, checkbox){

    checkbox.addEventListener ("change", () => {
        if (checkbox.checked){
            listaDeCompras.removeChild(item);
            listaComprados.appendChild(item)
        } else{
            listaComprados.removeChild (item);
            listaDeCompras.appendChild(item)
        }
        atualizarVisibilidadeComprados()
    });
}

function atualizarVisibilidadeComprados(){
    if (listaComprados.children.length > 0){
        listaComprados.style.display = "block";
        tituloComprados.style.display = "block";
        traco.style.display = "block"
    }else{
        listaComprados.style.display = "none";
        tituloComprados.style.display = "none";
        traco.style.display = "none"
    }
}

verificarListaVazia(listaDeCompras)