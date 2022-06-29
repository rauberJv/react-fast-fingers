import '../assets/header.scss'
import { FaRegKeyboard } from 'react-icons/fa'

export default function Header(){
    return (
        <header className='header'>
            <span className='header-title'>
             Fast Fingers
            </span>
            <FaRegKeyboard className='keyboard-icon'/>
        </header>
    )
}