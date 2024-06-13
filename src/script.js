function registrarUsuario(event) {

    event.preventDefault()

    var nome = document.getElementById('nome').value
    var sobrenome = document.getElementById('sobrenome').value
    var cidade = document.getElementById('cidade').value

    console.log(nome, sobrenome, cidade)

    var mysql = require('mysql2');

    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'eletronTeste'
    });
    connection.connect(function (error) {
        if (error) {
            console.log(error.code)
            console.log(error.fatal);


        }
    })

    var query = `INSERT INTO pessoa (nome, sobrenome, cidade) VALUES ("${nome}", "${sobrenome}", "${cidade}")`

    connection.query(query, function (error) {
        if (error) {
            console.log("ocorreu um erro ao inserir os dados")

        } else {
            alert("cadastro efetuado com sucesso")
           
        }})
        
}

//adicionar eventos de submit para o formulário de cadastro
var formulario = document.getElementById('formularios')

formulario.addEventListener('submit', registrarUsuario);

