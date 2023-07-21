import express from "express";
import hbs from "hbs";

//recuperar ruta raiz
import { dirname } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
//fin recuperación ruta raiz


let tareas = [{
    nombre: "Comprar leche",
    descripcion: "Leche de vaca",
}];

const app = express();
app.set("view engine", "hbs");
app.use(express.static("public"));
hbs.registerPartials(__dirname + "/views/contenedores");


app.get("/", (req, res) => {
    res.render("index", { tareas });
});

app.listen(3000, () => {
    console.log("Escuchando en el puerto 3000")
});