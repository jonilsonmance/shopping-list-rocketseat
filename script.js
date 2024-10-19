const items = document.getElementById("items");
const addItemButton = document.getElementById("addItemButton");
const listContainer = document.querySelector(".list-container");
const dangerMessage = document.querySelector(".danger.remove");
const closeDangerButton = document.getElementById("closeDangerMessage");

// Inicialmente, a div danger deve estar oculta

let hideMessageTimeout;

addItemButton.addEventListener("click", () => {
    const itemValue = items.value.trim();

    if (itemValue) {
        // Cria um novo elemento de lista
        const newItem = document.createElement("div");
        newItem.classList.add("list");

        newItem.innerHTML = `
            <input type="checkbox">
            <p>${itemValue}</p>
            <img src="assets/Frame-3.svg" alt="Remover item" class="remove-item">
        `;

        // Adiciona o novo item na lista
        listContainer.appendChild(newItem);

        // Adiciona o event listener para remover o item ao clicar na imagem
        const removeButton = newItem.querySelector(".remove-item");
        removeButton.addEventListener("click", () => {
            // Remove o item da lista
            listContainer.removeChild(newItem);

            // Exibe a mensagem de item removido
            dangerMessage.style.display = "flex";

            // Limpa o temporizador anterior, se existir
            clearTimeout(hideMessageTimeout);

            // Oculta a mensagem após 3 segundos
            hideMessageTimeout = setTimeout(() => {
                dangerMessage.style.display = "none";
            }, 3000);
        });

        // Limpa o campo de input
        items.value = "";
    }
});

// Adiciona o event listener para fechar a mensagem ao clicar na imagem dentro da div danger
closeDangerButton.addEventListener("click", () => {
    // Oculta a mensagem imediatamente
    dangerMessage.style.display = "none";

    // Cancela o temporizador, se ainda estiver ativo
    clearTimeout(hideMessageTimeout);
});