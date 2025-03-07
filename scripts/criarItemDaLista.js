import criarDiaDaSemana from "./criarDiaDaSemana.js";
const inputItem = document.getElementById("input-item");
let contador = 0;

export function criarItemDalista (){
    
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

    containerItemDaLista.appendChild(inputCheckbox);
    containerItemDaLista.appendChild(nomeItem);
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

    return itemDaLista
}