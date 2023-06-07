import express from "express";
import { sendEmail } from "../controllers/Mails.js";

const mailRouter = express.Router();

mailRouter.post("/",(req,res)=>{
    sendEmail(req,res)
});

export default mailRouter;