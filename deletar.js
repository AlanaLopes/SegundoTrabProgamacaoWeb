document.getElementById('nomedeletar').value = `${localStorage.nome}`
document.getElementById('datanascdeletar').value = `${localStorage.dataNascimento}`
document.getElementById('nomepaideletar').value = `${localStorage.nomePai}`
document.getElementById('nomemaedeletar').value = `${localStorage.nomeMae}`
document.getElementById('cidadedeletar').value = `${localStorage.cidade}`
document.getElementById('cursodeletar').value = `${localStorage.curso}`


let deletar = document.getElementById("limpar")
limpar.addEventListener("click", function deletar(){
    localStorage.clear()
    alert("Dados deletados")
})


