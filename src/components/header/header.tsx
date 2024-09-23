import { Link } from "react-router-dom"
import "./header.css"

const Header = () => {
    return (
        <div className="App">
            <nav className="navbar">
                <ul className="nav-list">
                    <li><Link to="/" className="nav-link">Dashboard</Link></li>
                    <li><Link to="/transaction" className="nav-link">Menu</Link></li>
                    <li><Link to="/sobre" className="nav-link">Sobre</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header