function criarDiaDaSemana() {

    const diaDaSemana = new Date().toLocaleDateString("default", { weekday: "long" });
    const data = new Date().toLocaleDateString("default");
    const hora = new Date().toLocaleTimeString("default", {
        hour: "numeric",
        minute: "numeric"
    });

    // Criando e adicionando o parágrafo com a data
    const itemData = document.createElement("p");
    itemData.innerText = `${diaDaSemana} (${data}) às ${hora}`;
    itemData.classList.add("texto-data");

    return itemData
}

export default criarDiaDaSemana;