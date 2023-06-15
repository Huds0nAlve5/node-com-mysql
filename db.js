async function conexao(){
    const mysql = require("mysql2/promise")
    const conection = await mysql.createConnection({
        host: "localhost",
        database: "teste",
        user: "root",
        password: ""
    })

    const [rows] = await conection.query("select * from user")

    return rows
}

async function vazio(){
    console.log(await conexao())
}

vazio()