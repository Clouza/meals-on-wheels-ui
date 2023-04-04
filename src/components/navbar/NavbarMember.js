import React, { useState } from "react";
import '../../css/landing.css';

// Import icon
import { SiConsul, SiSessionize } from 'react-icons/si';
import { BsPhoneVibrate } from 'react-icons/bs';
import { AiOutlineGlobal } from 'react-icons/ai';
import { CgMenuGridO } from 'react-icons/cg';
import { IoIosArrowDown } from "react-icons/io";

// Import Image
import logo from '../../assets/logo.png';
import Locale from "./Locale";
import lang from '../../Localization';

const NavbarMember = () => {
    // for remove navbar in the small witdth screen
    const [active, setActive] = useState('navBarMenu');

    const [isChanged, setIsChanged] = useState(false);

    const showNavBar = () => {
        setActive('navBarMenu showNavBar')
    }

    const removeNavBar = () => {
        setActive('navBarMenu')
    }

    const localization = () => {
        isChanged ? setIsChanged(false) : setIsChanged(true);
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
                    <li className="flex">
                        <BsPhoneVibrate /> Support
                    </li>
                    <li className="flex select-none" onClick={localization}>
                        <AiOutlineGlobal /> {sessionStorage.getItem('language')} <IoIosArrowDown />
                        {isChanged ? <Locale /> : ""}
                    </li>
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
                        <li onClick={removeNavBar} className="listItem"> {lang.navbar_home} </li>
                        <li onClick={removeNavBar} className="listItem"> {lang.navbar_donate} </li>
                        <li onClick={removeNavBar} className="listItem"> {lang.navbar_about} </li>
                        <li onClick={removeNavBar} className="listItem"> {lang.navbar_contact} </li>
                    </ul>

                    <button onClick={removeNavBar} className="btn flex btnTwo">
                        Login
                    </button>
                    <button onClick={removeNavBar} className="btn flex btnOne">
                        Join
                    </button>
                </div>
                <button className="btn flex btnoutThree">
                    Login
                </button>

                <button className="btn flex btnThree">
                    Join
                </button>

                <div onClick={showNavBar} className="toggleIcon">
                    <CgMenuGridO className="icon" />
                </div>

            </div>

        </div>
    )
}
export default NavbarMember;