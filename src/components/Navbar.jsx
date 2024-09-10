import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
    const [menuShow, setMenuShow] = useState(false)
    const toggleMenu = () => {
        setMenuShow(!menuShow)
    }
    return (
        <>
            <nav className='nav__principal'>
                <Link onClick={() => menuShow && toggleMenu()} id='name' to='/'><h1>mario abel</h1></Link>
                <div>
                    <svg onClick={toggleMenu} className='menu-icon' width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="30" height="3" rx="1.5" />
                        <rect y="9" width="30" height="3" rx="1.5" />
                        <rect y="18" width="30" height="3" rx="1.5" />
                    </svg>
                    <ul className={`nav__principal__ul ${menuShow ? "show" : ""}`}>
                        <li className="nav__principal__li" onClick={toggleMenu}><NavLink to='/'>About</NavLink></li>
                        <li className="nav__principal__li" onClick={toggleMenu}><NavLink to='/portfolio'>Portfolio</NavLink></li>
                        <li className="nav__principal__li" onClick={toggleMenu}><NavLink to='/contact'>Contact</NavLink></li>
                        <li className="nav__principal__li" onClick={toggleMenu}><NavLink to='/resume'>Resume</NavLink></li>
                    </ul>
                </div>
            </nav>
            <div className={menuShow ? "mask show" : "mask"} onClick={toggleMenu}></div>
        </>
    )
}
