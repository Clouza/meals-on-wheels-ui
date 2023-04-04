import React, { useState } from "react";
import '../../css/landing.css';
import { Link } from 'react-router-dom';

// Import icon
import { SiConsul } from 'react-icons/si';
import { BsPhoneVibrate } from 'react-icons/bs';
import { AiOutlineGlobal } from 'react-icons/ai';
import { CgMenuGridO } from 'react-icons/cg'

// Import Image
import logo from '../../assets/logo.png';

const NavbarMember = () => {
    const styles = {
        marginRight: '10px',
    };
    // for remove navbarr in the small witdth screen
    const [active, setActive] = useState('navBarMenu')
    const showNavBar = () => {
        setActive('navBarMenu showNavBar')
    }
    const removeNavBar = () => {
        setActive('navBarMenu')
    }

    // for the secondnavbar , when scroll the boxshadow appear and background change
    const [noBg, addBg] = useState('navBartTwo flex')
    const addBgColor = () => {
        if (window.scrollY >= 10) {
            addBg('navBartTwo flex navbar_With_Bg')
        } else {
            addBg('navBartTwo flex')
        }
    }
    window.addEventListener('scroll', addBgColor)

    return (
        <div className="navBar flex">
            <div className="navBarOne flex">
                <div>
                    <SiConsul className="icon" />
                </div>

                <div className="none flex">
                    <li className="flex"> <BsPhoneVibrate />Support</li>
                    <li className="flex"> <AiOutlineGlobal />Languages</li>
                </div>

                <div className="atb flex">
                    <span>User</span>
                </div>
            </div>

            <div className={noBg} >

                <div className="logoDiv">
                    <img src={logo} className="logo" />
                </div>

                <div className={active}>
                    <ul className="menu flex">
                        <li onClick={removeNavBar} className="listItem"> <a href="/">Home</a> </li>
                        <li onClick={removeNavBar} className="listItem"> <a href="/donate">Donate </a> </li>
                        <li onClick={removeNavBar} className="listItem"><a href="/about">About</a></li>
                        <li onClick={removeNavBar} className="listItem"><a href="/contact">Contact</a>  </li>
                    </ul>

                    <Link to="/login">
                        <button onClick={removeNavBar} className="btn flex btnTwo">
                            Login
                        </button>
                    </Link>


                    <Link to="/register">
                        <button onClick={removeNavBar} className="btn flex btnOne">
                            Join
                        </button>
                    </Link>
                </div>
                <Link to="/login">
                <button style={styles} className="btn flex btnoutThree">
                    Login
                </button>
                </Link>
                
                
                <Link to="/register">
                <button style={styles} className="btn flex btnThree">
                    Join
                </button>
                </Link>
                

                <div onClick={showNavBar} className="toggleIcon">
                    <CgMenuGridO className="icon" />
                </div>

            </div>

        </div>
    )
}
export default NavbarMember;