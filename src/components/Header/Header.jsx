import './header.scss'
import { FaRegKeyboard } from 'react-icons/fa'
import HeaderNavigation from '../HeaderNavigation/HeaderNavigation'

export default function Header() {
    return (
        <header>
            <div className='header'>
                <span className='header-title'>
                    Fast Fingers
                </span>
                <FaRegKeyboard className='keyboard-icon' />
            </div>
            <HeaderNavigation />
        </header>
    )
}