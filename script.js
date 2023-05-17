function salvar() {
    localStorage.nome = document.getElementById('nome').value
    localStorage.dataNascimento = document.getElementById('dataNascimento').value
    localStorage.nomeMae = document.getElementById('nomeMae').value
    localStorage.nomePai = document.getElementById('nomePai').value
    localStorage.cidade = document.getElementById('cidade').value
    localStorage.curso = document.getElementById('curso').value
}

document.getElementById('nome').innerHTML = `${localStorage.nome}`
document.getElementById('datanasc').innerHTML = `${localStorage.dataNascimento}`
document.getElementById('nomepai').innerHTML = `${localStorage.nomePai}`
document.getElementById('nomemae').innerHTML = `${localStorage.nomeMae}`
document.getElementById('cidade').innerHTML = `${localStorage.cidade}`
document.getElementById('curso').innerHTML = `${localStorage.curso}`
