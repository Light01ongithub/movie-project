import { Link } from "react-router-dom"
import "../assets/Navbar.css";

function Navbar (){

    return(
        <nav className="navbar">

        <div className="nav-brand">
            <Link to="/">Home</Link>
            <Link to="/Fav">Favourite</Link>
        </div>
        </nav>
    )
}

export default Navbar