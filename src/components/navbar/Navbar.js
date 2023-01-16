import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import classes from "./Header.module.scss";
import { Link, useNavigate  } from "react-router-dom";
import Logo from '../../../src/images/nearpayslogo.png'
import './nav.css'

const Navbar = () => {
    const history = useNavigate ();

    const [menuOpen, setMenuOpen] = useState(false);
    
    const [size, setSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (size.width > 769 && menuOpen) {
            setMenuOpen(false);
        }
    }, [size.width, menuOpen]);

    const menuToggleHandler = () => {
        setMenuOpen((p) => !p);
    };

    const ctaClickHandler = () => {
        menuToggleHandler();
        history.push("/page-cta");
    };
    
    //change nav color when scrolling
    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false)
        }
            
    }

    window.addEventListener('scroll', changeColor)
    

    return (
        <div id="header" className={color ? "header-bg" : "header"} >
        <header  className={classes.header} >
            <div className={classes.header__content}>
                <Link to="/" className={classes.header__content__logo}>
                    <img src={Logo}  alt='NearPays'/>
                </Link>
                <nav id="nav"
                    className={`${classes.header__content__nav} ${
                        menuOpen && size.width < 769 ? classes.isMenu : ""
                    }`}
                >
                    <ul id="navmenu">
                        <li>
                            <Link to="/why-nearpays" onClick={menuToggleHandler}>
                                Why NearPays
                            </Link>
                        </li>
                        <li>
                            <Link to="/faq" onClick={menuToggleHandler}>
                                Faq
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact-us" onClick={menuToggleHandler}>
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                    <button onClick={ctaClickHandler}>Register</button>
                </nav>
                <div className={classes.header__content__toggle}>
                    {!menuOpen ? (
                        <BiMenuAltRight onClick={menuToggleHandler} />
                    ) : (
                        <AiOutlineClose onClick={menuToggleHandler} />
                    )}
                </div>
            </div>
        </header>
        </div>
    );
};

export default Navbar;
