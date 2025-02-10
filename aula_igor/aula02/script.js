document.getElementById("adicionarTarefa").addEventListener("click",function () {

    const inputTarefa = document.querySelector("#novaTarefa");
    const TarefaTexto = inputTarefa.value;

    if(TarefaTexto === ""){
       alert("O campo não pode estar vazio!")
    }

    const listaTarefas = document.querySelector("#listaTarefas")

    // Criar um elemeto Li(lista)

    const li = document.createElement("li")

    li.textContent = TarefaTexto;

    //Adiciona li ao HTML

    listaTarefas.appendChild(li)

    inputTarefa.value== "";
});

document.getElementById("LimparTarefas").addEventListener("click", function(){
const listaTarefas = document.querySelector("#listaTarefas")
listaTarefas.textContent = "";
})