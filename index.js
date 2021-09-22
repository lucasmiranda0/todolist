const botao = document.getElementById("botao");

botao.addEventListener("click", () => {

    const tarefa = document.getElementById("tarefa");
    const prazo = document.getElementById("prazo");
    const tag = document.getElementById("tag");
    if (localStorage.getItem("qtd") === "NaN") {
        qtd = 0;
    } else {
        qtd = localStorage.getItem("qtd");
    }
    localStorage.setItem("qtd", qtd + 1);
    localStorage.setItem("tarefa" + (qtd + 1), tarefa.value);
    localStorage.setItem("prazo" + (qtd + 1), prazo.value);    
    localStorage.setItem("tag" + (qtd + 1), tag.value);    
});

//document.getElementById("tarefa").value = localStorage.getItem("tarefa");
//document.getElementById("prazo").value = localStorage.getItem("prazo");