import "./header-navigation.scss"
import { Link, useLocation } from "react-router-dom"

export default function HeaderNavigation(){

    return (
        <nav className="header-navigation">
            <Link to="/" className={`navigation-item ${useLocation().pathname === '/' ? 'selected' : ''}`} >Home</Link>
            <Link to="/results" className={`navigation-item ${useLocation().pathname === '/results' ? 'selected' : ''}`}>Results</Link>
        </nav>
    )
}