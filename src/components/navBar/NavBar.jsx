import Boton from '../forms/Boton/Boton';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = ()=>{
    return(
        <div className='grid nav'>
                <div className='opc'>Logo</div>
                <div className='opc'>
                    <ul className='menu flex'>
                        <li><Link to='/'>Inicio</Link></li>
                        <li><Link to='/support'>Soporte</Link></li>
                        <li><Link to='/about'>Nosotros</Link></li>
                    </ul>
                </div>
                <div className='opc'>
                    <Link to='/contact'><Boton style='specialice' id='NavBtn'>contactenos</Boton></Link>
                </div>
        </div>
    )
}

export default NavBar