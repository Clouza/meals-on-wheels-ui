import React, { useState, useContext,useEffect } from "react";
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
import Service from "../../service/Service";

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
    const [role, setRole] = useState(null);

    // Add this useEffect hook to fetch user role after login
    useEffect(() => {
        if (sessionStorage.getItem('token')) {
            Service.getUser().then(response => {
                setRole(response.data.role);
            });
        }
    }, []);

    // ==========================

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
                {sessionStorage.getItem('token') != null ?
                    <div className="atb flex">
                        <Link to={"/viewprofile"}>
                            <span>"name user"</span>
                        </Link>
                    </div>
                    :
                    // else
                    <>
                        <div className="atb flex">
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
                        {/* <li onClick={removeNavBar} className="listItem">  </li>
                        {authCtx.role === 'MEMBER' && <a href="/member">Member</a>}
                        {authCtx.role === 'RIDER' && <a href="/rider">Rider</a>}
                        {authCtx.role === 'PARTNER' && <a href="/partner">Partner</a>}
                        {authCtx.role === 'ADMIN' && <a href="/admin">Admin</a>} */}
                        {role === 'MEMBER' && (
                            <>
                            <li onClick={removeNavBar} className="listItem">
                                <a href="/member">Food</a>
                            </li>
                            <li onClick={removeNavBar} className="listItem">
                                <a href="/memberorder">My Order</a>
                            </li>
                            </>       
                        )}
                        {role === 'RIDER' && (
                            <>
                            <li onClick={removeNavBar} className="listItem">
                                <a href="/rider">Schedule</a>
                            </li>
                            <li onClick={removeNavBar} className="listItem">
                                <a href="/applydelivery">Apply delivery</a>
                            </li>
                            </>
                            
                        )}
                        {role === 'PARTNER' && (
                            <>
                            <li onClick={removeNavBar} className="listItem">
                                <a href="/partnerhome">Food posted</a>
                            </li>
                            <li onClick={removeNavBar} className="listItem">
                                <a href="/partnerAddFood">Add food</a>
                            </li>
                            </>
                            
                        )}
                        {role === 'ADMIN' && (
                            <li onClick={removeNavBar} className="listItem">
                                <a href="/admin">Admin Page</a>
                            </li>
                        )}
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



        </div>
    )
}
export default NavbarMember;