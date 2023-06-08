import express from "express";
import mailRouter from "./Routes/MailRoutes.js";
import cors from 'cors'

const app = express();
const puerto = process.env.PORT || 8090

app.listen(puerto, ()=>{
    console.log("el servidor se está ejecutando");
})


app.use(cors({origin:"http://localhost:5173"}));
app.use(express.json());

app.use("/mail", mailRouter);