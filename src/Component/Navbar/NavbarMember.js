import React, {useState} from "react";
import '../../css/Landing.css';

// Import icon
import {SiConsul} from 'react-icons/si';
import {BsPhoneVibrate} from 'react-icons/bs';
import {AiOutlineGlobal} from 'react-icons/ai';
import {CgMenuGridO} from 'react-icons/cg'

// Import Image
import logo from '../../assets/logo.png';

const NavbarMember =()=>{
    // for remove navbarr in the small witdth screen
    const [active, setActive] = useState('navBarMenu')
    const showNavBar = () =>{
        setActive('navBarMenu showNavBar')
    }
    const removeNavBar = () =>{
        setActive('navBarMenu')
    } 

    // for the secondnavbar , when scroll the boxshadow appear and background change
    const [noBg, addBg] = useState('navBartTwo flex')
    const addBgColor = () =>{
        if(window.scrollY >= 10){
            addBg('navBartTwo flex navbar_With_Bg')
        }else{
            addBg('navBartTwo flex') 
        }   
    }
    window.addEventListener('scroll', addBgColor)
    
    return(
        <div className="navBar flex">
            <div className="navBarOne flex">
                <div>
                  <SiConsul className="icon"/>  
                </div>

                <div className="none flex">
                    <li className="flex"> <BsPhoneVibrate/>Support</li>
                    <li className="flex"> <AiOutlineGlobal/>Languages</li>
                </div>

                <div className="atb flex">
                    <span>User</span>
                </div>
            </div>
            
            <div  className={noBg} >

                <div className="logoDiv">
                <img src={logo} className="logo"/>
                </div>

                <div className={active}>
                   <ul className="menu flex">
                    <li onClick={removeNavBar} className="listItem"> Home </li>
                    <li onClick={removeNavBar} className="listItem"> Donate </li>
                    <li onClick={removeNavBar} className="listItem"> About </li>
                    <li onClick={removeNavBar} className="listItem"> Contact </li>
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

                <div onClick={showNavBar}  className="toggleIcon">
                    <CgMenuGridO  className="icon"/>
                </div>

            </div>
            
        </div>
    )
}
export default NavbarMember;