import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './whynavbar.css'
import Logo from '../../../../src/images/nearpayslogo.png'

const WhyNavbar = () => {

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
    <div className={color ? "header-bg" : "whyheader"} >
    <nav className='navbar' >
    <Link to="/" className='logo'>
    <img src={Logo}  alt='NearPays'/>
    </Link>
        
        <ul className={ Mobile ? 'nav-links-mobile' : 'nav-links'} onClick={() => setMobile(false)}>
            
            <Link to="/why-nearpays" className='whynearpays'>
                <li>Why Nearpays</li>
            </Link>

            <Link to="/faqs" className='faq'>
                <li>Faqs</li>
            </Link>

            <Link to="/contact-us" className='contact'>
                <li>Contact Us</li>
            </Link>

            <Link to="/" >
                <button id='register-button'>Register</button>
            </Link>
        </ul>
        <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
            {Mobile ? ( <i className='fas fa-times'/>) : (<i className='fas fa-bars' />)}
        </button>
    </nav>
    </div>
  )
}

export default WhyNavbar