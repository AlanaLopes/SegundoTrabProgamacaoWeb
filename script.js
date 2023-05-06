window.addEventListener("load", function(){
    let nome = document.getElementById("nome")
    let dataNascimento = document.getElementById("dataNascimento")
    let nomeMae = document.getElementById("nomeMae")
    let nomePai = document.getElementById("nomePai")
    let cidade = document.getElementById("cidade")
    let curso = document.getElementById("curso")
    let salvar = document.getElementById("btnAdd")
    var paragrafo = document.getElementById('mostrar')


    salvar.addEventListener('click', function(){
        var dados = {"nome" : nome.value, "dataNascimento" : dataNascimento.value,
        "nomeMae" : nomeMae.value, "nomePai" : nomePai.value, "cidade" : cidade.value,
        "curso" : curso.value}
        var ls = localStorage.getItem("infos")

        if(ls){
            var json = JSON.parse(ls)
            json.push(dados)
            json = JSON.stringify(json)
            localStorage.setItem("infos", json)
        }else{
            localStorage.setItem("infos", JSON.stringify([dados]))
        }
        var ls_array = JSON.parse(localStorage.getItem("infos"))
        var texto = ''
        for(var item of ls_array){
            texto += "Nome: "+ item.nome + "<br>Data de Nascimento: "+ item.dataNascimento +
            "<br>Nome Mãe: "+ item.nomeMae + "<br>Nome Pai: " + item.nomePai + "<br>Cidade: "+ item.cidade
            "<br>Curso: " + item.curso} 
            paragrafo.innerHTML = texto
    })
})
