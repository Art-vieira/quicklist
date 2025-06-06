const input = document.querySelector("#add");
const button = document.querySelector("#rosa");
const lista = document.querySelector("#lista");

const deletar = document.querySelector("#deletar");
if (deletar) {
    deletar.remove();
}

button.addEventListener("click", addItem);
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addItem();
    }
});

function showDeleteNotification() {
    var cointainer = document.getElementById('container');
    const deletar = document.createElement('div');
    deletar.id = 'deletar';
    deletar.innerHTML = `
    <img src="icon/warning.svg" alt="Fechar" style="cursor: pointer; width: 18px;" onclick="this.parentElement.remove()" />
    <span>O item foi removido da lista</span>
  `;

  cointainer.appendChild(deletar);
    // document.body.appendChild(deletar);

    setTimeout(() => {
        deletar.remove();
    }, 3000);
}

function addItem() {
    const texto = input.value.trim();
    if (texto === "") return;

    const Item = document.createElement('div');
    Item.className = 'item';

    Item.innerHTML = `
            <div class="a">
                <input type="checkbox" name="" id="">
                <h3>${texto}</h3>
            </div>
            <div class="b">
                <img src="icon/Frame.svg" alt="Deletar" class="lixeira" style="cursor:pointer; width: 18px;" />
            </div>
        `;

        Item.querySelector(".lixeira").addEventListener("click", () => {
            Item.remove();
            showDeleteNotification();
        });

        lista.appendChild(Item);
        input.value = "";
}
