import './header.scss'
import { FaRegKeyboard } from 'react-icons/fa'
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <Link to="/" className='header'>
                <span className='header-title'>
                    Fast Fingers
                </span>
                <FaRegKeyboard className='keyboard-icon' />
            </Link>
        </header>
    )
}