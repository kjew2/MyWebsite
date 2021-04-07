import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { MdFingerprint } from 'react-icons/md'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Button } from './Button'
import './NavBar.css';
import { IconContext} from 'react-icons/lib'

function NavBar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 720) {
            setButton(false)

        } else {
            setButton(true)
        }
    }

    window.addEventListener('resize', showButton);
    return (
        <>
            <div className="navbar">
                <div className="navbar-container container">
                    <Link to='/' className="navbar-logo">
                        Kyle Jew
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/projects" className="nav-links">
                                Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a href="/Kyle_Jew_Resume_2021.pdf" className="nav-links" target="_blank">
                                Resume
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default NavBar
