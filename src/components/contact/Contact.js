import React from "react";
import '../../css/contact.css';

// import icon
import { BiMap } from 'react-icons/bi';
import { MdAttachEmail } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { SlSocialTwitter } from 'react-icons/sl';
import { BsInstagram } from 'react-icons/bs';
import { AiOutlineFacebook, AiOutlineLinkedin } from 'react-icons/ai';

const Contact = () => {
    return (
        <>
            <div className="contactUss">
                <div className="title">
                    <h2>Get In Touch</h2>
                </div>
                <div className="boxx">
                    <div className="contactt form">
                        <h3>Send a message</h3>
                        <form>
                            <div className="formBox">
                                <div className="row50">
                                    <div className="inputBox">
                                        <span>First Name</span>
                                        <input type="text" placeholder="Siti"></input>
                                    </div>

                                    <div className="inputBox">
                                        <span>Last Name</span>
                                        <input type="text" placeholder="aye"></input>
                                    </div>
                                </div>

                                <div className="row50">
                                    <div className="inputBox">
                                        <span>Email</span>
                                        <input type="text" placeholder="Siti@gmail.com"></input>
                                    </div>

                                    <div className="inputBox">
                                        <span>Phone Number</span>
                                        <input type="text" placeholder="+62 21312343"></input>
                                    </div>
                                </div>

                                <div className="row100">
                                    <div className="inputBox">
                                        <span>Message</span>
                                        <textarea placeholder="write your message here"></textarea>
                                    </div>
                                </div>

                                <div className="row100">
                                    <div className="inputBox">
                                        <input type="submit" value="send"></input>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    {/* info */}
                    <div className="contactt info">
                        <h3>Contact Info</h3>
                        <div className="infoBox">
                            <div>
                                <span><BiMap /></span>
                                <p>Marry meals Location <br /> BALI</p>
                            </div>
                            <div>
                                <span><MdAttachEmail /></span>
                                <a href="mailto:marrymeals@gmail.com">marrymeals@gmail.com</a>
                            </div>
                            <div>
                                <span><BsFillTelephoneFill /></span>
                                <a href="tel:+62 349328 43">+62 349328 43</a>
                            </div>
                            {/* Social media links */}
                            <ul className="sci">
                                <li><a href="#"><AiOutlineFacebook /></a></li>
                                <li><a href="#"><SlSocialTwitter /></a></li>
                                <li><a href="#"><BsInstagram /></a></li>
                                <li><a href="#"><AiOutlineLinkedin /></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="contactt map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253840.48788424986!2d106.6894303488601!3d-6.229728025769694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1680494955851!5m2!1sid!2sid" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Contact;
