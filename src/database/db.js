//IMPORTAR A DEPENDENCIA DO SQLITE3
const sqlite3 = require("sqlite3").verbose()//verbose mais informações em tela

//criar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

//exporta  a database
module.exports = db