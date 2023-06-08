import { API_URL } from './apiService.js'

export async function ContactService(nombre, correo, asunto, celular, mensaje){

    const res = await fetch(API_URL+"/mail",{
        method:"POST",
        mode:"cors",
        headers:{
            nombre:nombre,
            correo:correo,
            asunto:asunto,
            celular:celular,
            mensaje:mensaje
        }
    })

    if(res.ok){
        alert ("enviado") 
    }else{
        alert("hay un error")
    }

}