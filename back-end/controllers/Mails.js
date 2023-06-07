import nodemailer from 'nodemailer'

export async function sendEmail (req, res){
    const info = req.headers;

    var message = {
        from: "proyectoNiEd@gmail.com",
        to: "proyectoNiEd@gmail.com",
        subject: info.asunto,
        text: info.text,
    }

    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth:{
            user: 'proyectoNiEd@gmail.com',
            pass: 'alplbxwqtgyvzqri'
        }
    })

    transporter.sendMail(message,(error,info) => {
        if(error){
            console.log(error)
        }else{
            console.log('email send'+info.response)
            res.send('ok');
        }
    });
}