import { useState } from "react"
import { ContactService } from "../../services/ContactService.js"
import Boton from "../../components/forms/Boton/Boton"
import TextArea from "../../components/forms/TextArea/TextArea"
import Input from "../../components/forms/input/Input"
import './Contact.css'

function Contact(){

    async function onSubmit (evento){
        console.log("hola")
        evento.preventDefault();
        const res = ContactService(nombre, correo, asunto, celular, mensaje);
    }

    const [nombre, SetNombre] = useState("");
    const [correo, SetCorreo] = useState("");
    const [asunto, SetAsunto] = useState("");
    const [celular, SetCelular] = useState("");
    const [mensaje, setMensaje] = useState("");

    return(
        <div className="ContactContainer">
            <div className="ContactForm">
                <h1 className="title">CONTACTENOS</h1>
                <form onSubmit={(evento)=>onSubmit(evento)}>
                    <div className="grid gridContact">
                        <Input onChange={(val)=>SetNombre(val.target.value)}>Nombre</Input>
                        <Input onChange={(val)=>SetCorreo(val.target.value)}>Correo</Input>
                        <Input onChange={(val)=>SetAsunto(val.target.value)}>Asunto</Input>
                        <Input onChange={(val)=>SetCelular(val.target.value)}>Celular</Input>   
                    </div>
                    <TextArea onChange={(val)=>setMensaje(val.target.value)}>Mensaje</TextArea>
                    <div className="btn-container">
                        <Boton style='specialice' type='submit'>Contactenos</Boton>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact