const botaoAtualizar = document.getElementById("botaoAtualizar");
const id = document.getElementById("id");

botaoAtualizar.addEventListener("click", () => {

    const tarefa = document.getElementById("tarefaAtualizar");
    const prazo = document.getElementById("prazoAtualizar");
    const tag = document.getElementById("tagAtualizar");
    if(id.value == 1) {
        localStorage.setItem("tarefa1", tarefa.value);
        localStorage.setItem("prazo1", prazo.value);    
        localStorage.setItem("tag1", tag.value);    
    } else if(id.value == 2) {
        localStorage.setItem("tarefa11", tarefa.value);
        localStorage.setItem("prazo11", prazo.value);    
        localStorage.setItem("tag11", tag.value);    
    } else if(id.value == 3) {
        localStorage.setItem("tarefa111", tarefa.value);
        localStorage.setItem("prazo111", prazo.value);    
        localStorage.setItem("tag111", tag.value);    
    } else if(id.value == 4) {
        localStorage.setItem("tarefa1111", tarefa.value);
        localStorage.setItem("prazo1111", prazo.value);    
        localStorage.setItem("tag1111", tag.value);    
    } 
});