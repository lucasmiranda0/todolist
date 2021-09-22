const botaoRemover = document.getElementById("botaoRemover");
const remover = document.getElementById("remover");

botaoRemover.addEventListener("click", () => {

    if(remover.value == "1") {
        localStorage.setItem("tarefa1", null);
        localStorage.setItem("prazo1", null);    
        localStorage.setItem("tag1", null);    
    } else if(remover.value == 2) {
        localStorage.setItem("tarefa11", tarefa.value = null);
        localStorage.setItem("prazo11", prazo.value = null);    
        localStorage.setItem("tag11", tag.value = null);    
    } else if(remover.value == 3) {
        localStorage.setItem("tarefa111", tarefa.value = null);
        localStorage.setItem("prazo111", prazo.value = null);    
        localStorage.setItem("tag111", tag.value = null);    
    } else if(remover.value == 4) {
        localStorage.setItem("tarefa1111", tarefa.value = null);
        localStorage.setItem("prazo1111", prazo.value = null);    
        localStorage.setItem("tag1111", tag.value = null);    
    } 
});