import './Home.css'
const Home = ()=>{
    return(
        <div>
            <div className="PrincipalHome">
                <div class="slogan">
                    <p>Slogan de la empresa</p>
                </div>
                <div class="nosotros">
                    <a class="text" href='#services'>Conoce nuestros servicios <i class="bi bi-arrow-right"></i></a>
                </div>
            </div>
            <div id='services'>
                <h1>Nuestros servicios</h1>
            </div>
        </div>
        
    )
}

export default Home