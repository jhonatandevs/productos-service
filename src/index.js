const express = require("express");
const morgan = require("morgan")
const database=require("./database")
const cors= require("cors");
//Configuracion Inicial
const app = express();
app.set("port", 4000);
app.listen(app.get("port"));
console.log("Escuchando en el puerto " + app.get("port"))


//Moddlewares
app.use(morgan("dev"))
app.use(cors({
    origin:["http://127.0.0.1:5501","http://127.0.0.1:5500"]
}))

//Rutas
app.get("/productos", async (req, res) => {
    // res.send("Mensaje recibido nuevo log")
   const connection= await database.getConnection()
   const result= await connection.query("SELECT * from producto");
   res.json(result)
})