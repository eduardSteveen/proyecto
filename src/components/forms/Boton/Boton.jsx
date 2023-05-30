import './Boton.css'

const Boton = (props) =>{

    const { children, onClick, type, style, id } = props

    return(
        <button className={'btn-'+style} onClick={onClick} type={type} id={id}>{children}</button>
    ) 
}

export default Boton
