import express from "express";
import mailRouter from "./Routes/MailRoutes.js";

const app = express();
const puerto = process.env.PORT || 8090

app.listen(puerto, ()=>{
    console.log("el servidor se está ejecutando");
})

app.use("/mail", mailRouter);