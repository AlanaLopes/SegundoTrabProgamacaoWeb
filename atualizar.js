document.getElementById('nomeatual').value = `${localStorage.nome}`
document.getElementById('datanascatual').value = `${localStorage.dataNascimento}`
document.getElementById('nomepaiatual').value = `${localStorage.nomePai}`
document.getElementById('nomemaeatual').value = `${localStorage.nomeMae}`
document.getElementById('cidadeatual').value = `${localStorage.cidade}`
document.getElementById('cursoatual').value = `${localStorage.curso}`

function atualizar(){
localStorage.setItem('nome', document.getElementById('nomeatual').value)
localStorage.setItem('dataNascimento', document.getElementById('datanascatual').value)
localStorage.setItem('nomePai', document.getElementById('nomepaiatual').value)
localStorage.setItem('nomeMae', document.getElementById('nomemaeatual').value)
localStorage.setItem('cidade', document.getElementById('cidadeatual').value)
localStorage.setItem('curso', document.getElementById('cursoatual').value)
}
