import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import Logo from '../../../src/images/nearpayslogo.png'

const Navbar = () => {

//************Mobile Responsive View*************/
    const [Mobile, setMobile] = useState(false)

//***************change nav color when scrolling***************/

const [color, setColor] = useState(false)
const changeColor = () => {
    if (window.scrollY >= 75) {
        setColor(true)
    } else {
        setColor(false)
    }
        
}

window.addEventListener('scroll', changeColor)

//************************************************************ */
  return (
    <header id="header" className={color ? "header-bg" : "header"}>
    <nav className='navbar'>
    <Link to="/" className='logo'>
    <img src={Logo}  alt='NearPays'/>
    </Link>
        
        <ul className={ Mobile ? 'nav-links-mobile' : 'nav-links'} onClick={() => setMobile(false)}>
            
            <Link to="/why-nearpays" className='whynearpays'>
                <li>Why Nearpays</li>
            </Link>

            <Link to="/faq" className='faq'>
                <li>Faq</li>
            </Link>

            <Link to="/contact-us" className='contact'>
                <li>Contact Us</li>
            </Link>

            <Link to="/register" id='register-button'>
                <button >Register</button>
            </Link>
        </ul>
        <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
            {Mobile ? ( <i className='fas fa-times'/>) : (<i className='fas fa-bars' />)}
        </button>
    </nav>
    </header>
  )
}

export default Navbar