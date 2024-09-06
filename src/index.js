const express = require("express");
const morgan = require("morgan")
const database=require("./database")

//Configuracion Inicial
const app = express();
app.set("port", 4000);
app.listen(app.get("port"));
console.log("Escuchando en el puerto " + app.get("port"))


//Moddlewares
app.use(morgan("dev"))


//Rutas
app.get("/productos", async (req, res) => {
    // res.send("Mensaje recibido nuevo log")
   const connection= await database.getConnection()
   const result= await connection.query("SELECT * from producto");
   console.log(result)
})