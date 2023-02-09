import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import Logoblack from '../../../src/images/nearpayslogo.png'
import Logowhite from '../../images/Nearpayslogowhite.png'
import { Navlinks, Registerbtn } from './NavStyles'

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

//Scrolls to top o page when you click on a new page link//
useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <div className={color ? "header-bg" : "header"} >
    <nav className='navbar' >
    <Link to="/" className={ color ? 'logo-bg' : 'logo'}>
    <img src={color ? Logoblack : Logowhite}   alt='NearPays' style={{objectFit:'contain'}}/>
    </Link>
        
        <ul className={ Mobile ? 'nav-links-mobile' : 'nav-links'} onClick={() => setMobile(false)}>
            
            <Link to="/why-nearpays"  style={{textDecoration:'none'}}>
                <Navlinks className={color ? "whynearpays-bg" : "whynearpays"}>Why Nearpays</Navlinks>
            </Link>

            <Link to="/faqs" style={{textDecoration:'none'}}>
                <Navlinks  className={color ? "faq-bg" : "faq"}>Faqs</Navlinks>
            </Link>

            <Link to="/contact-us" style={{textDecoration:'none'}} >
                <Navlinks className={color ? "contact-bg" : "contact"}>Contact Us</Navlinks>
            </Link>

            <Link to="/" >
                <Registerbtn className={color ? "register-button-bg" : "register-button"}>Register</Registerbtn>
            </Link>
        </ul>
        <button className={color ? "mobile-menu-icon-bg" : "mobile-menu-icon"} onClick={() => setMobile(!Mobile)}>
            {Mobile ? ( <i className='fas fa-times'/>) : (<i className='fas fa-bars' />)}
        </button>
    </nav>
    </div>
  )
}

export default Navbar