import React from "react";
import '../../css/Landing.css';

// img
import logo from '../../assets/whitelogo.png';

// icon
import { TiSocialFacebook } from 'react-icons/ti';
import { AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai';
import { FaPinterestP } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="footer">
            <div className="sectionContainer container grid">
                <div className="gridOne">
                    <div className="logoDiv">
                        <img src={logo} className="Logo" />
                    </div>
                    <p> Your mind under taken and under water please help me</p>
                    <div className="socialIcon flex">
                        <TiSocialFacebook className="icon" />
                        <AiOutlineTwitter className="icon" />
                        <AiFillYoutube className="icon" />
                        <FaPinterestP className="icon" />
                    </div>
                </div>

                <div className="footerLinks">
                    <span className="linkTitle">Information</span>

                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Donate</a>
                    </li>
                    <li>
                        <a href="">Abou us</a>
                    </li>
                    <li>
                        <a href="">Contact us</a>
                    </li>
                    <li>
                        <a href="">Term and Con</a>
                    </li>
                    <li>
                        <a href="">join</a>
                    </li>
                </div>
                <div className="footerLinks">
                    <span className="linkTitle">Quick Guide</span>

                    <li>
                        <a href="">Faq</a>
                    </li>
                    <li>
                        <a href="">explore</a>
                    </li>
                    <li>
                        <a href="">How to</a>
                    </li>
                    <li>
                        <a href="">Why Choose us</a>
                    </li>
                    <li>
                        <a href="">Kemendikbud</a>
                    </li>
                    <li>
                        <a href="">Kominfo</a>
                    </li>
                </div>
                <div className="footerLinks">
                    <span className="linkTitle">Our partnership</span>

                    <li>
                        <a href="">Gojek</a>
                    </li>
                    <li>
                        <a href="">Go Food</a>
                    </li>
                    <li>
                        <a href="">Go lang</a>
                    </li>
                    <li>
                        <a href="">Go shoot</a>
                    </li>
                    <li>
                        <a href="">Go Car</a>
                    </li>
                    <li>
                        <a href="">Go Block</a>
                    </li>
                </div>

            </div>

            <div className="copyRightDiv flex">
                <p>Developmen Enterprise Application | Developed by <a href="" target="_blank">Group 1 </a></p>
            </div>
        </div>
    )
}
export default Footer;