import { Route, Routes } from "react-router-dom"
import NavBar from "./components/navBar/NavBar.jsx"
import Home from "./views/Home/Home.jsx"
import Support from "./views/Support/Support.jsx"
import Contact from "./views/contact/Contact.jsx"
import About from "./views/About/About.jsx"


const App = ()=>{

    return(
        <section>
            <NavBar></NavBar>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/support" element={<Support></Support>}></Route>
                <Route path="/contact" element={<Contact></Contact>}></Route>
                <Route path="/about" element={<About></About>}></Route>
            </Routes>
        </section>
    )
}

export default App