import React, { useState, useContext } from "react";
import '../../css/landing.css';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from "../../authContext/auth-context";

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


    // For auth
    const authCtx = useContext(AuthContext);
    const navigate = useNavigate();
    const logoutHandler = () => {
        authCtx.logout();
        sessionStorage.removeItem('token');
        navigate("/login");
    };
    // ===========================

    const styles = {
        marginRight: '10px',
    };
    const logout = {
        background: "#DC6767",
    };
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
            {/* Header user not yet login */}
            {/* {!authCtx.isLoggedIn && (<> */}
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
                    {/* <span>User</span> */}
                </div>

                {sessionStorage.getItem('token') != null ?
                    <div className="atb flex">
                        <span>WELCOME "name user"</span>
                    </div>
                    :
                    // else
                    <>
                        <div className="atb flex">
                            {/* <span>User</span> */}
                        </div>
                    </>
                }
            </div>

            <div className={noBg} >

                <div className="logoDiv">
                    <img src={logo} className="logo" />
                </div>

                <div className={active}>
                    <ul className="menu flex">
                        <li onClick={removeNavBar} className="listItem"> <a href="/"> {lang.navbar_home}</a> </li>
                        <li onClick={removeNavBar} className="listItem"> <a href="/donate">{lang.navbar_donate} </a> </li>
                        <li onClick={removeNavBar} className="listItem"><a href="/about">{lang.navbar_about}</a></li>
                        <li onClick={removeNavBar} className="listItem"><a href="/contact">{lang.navbar_contact}</a>  </li>
                        <li onClick={removeNavBar} className="listItem">  </li>
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
                {sessionStorage.getItem('token') != null ?
                    <Link to="/">
                        <button style={logout} onClick={logoutHandler} className="btn flex btnThree">
                            Logout
                        </button>
                    </Link>
                    :
                    // else
                    <>
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
                    </>
                }


                <div onClick={showNavBar} className="toggleIcon">
                    <CgMenuGridO className="icon" />
                </div>

            </div>
            {/* </>)} */}


            {/* ==================================================== */}


        </div>
    )
}
export default NavbarMember;