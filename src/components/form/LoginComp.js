import React from "react";
import '../../css/form.css';
import { BsFacebook } from 'react-icons/bs';
import { SlSocialGoogle } from 'react-icons/sl';
import { FiTwitter } from 'react-icons/fi';
// Import Image
import logo from '../../assets/logo.png';
const colorFacebook ={
    background:'#1877f2',
    fontSize: '20px', 
    display: 'flex', 
    alignItems: 'center',
    justifyContent: 'space-between'
};
const colorGoogle ={
    background:'#ea4335',
    fontSize: '20px', 
    display: 'flex', 
    alignItems: 'center',
    justifyContent: 'space-between'
};
const colorTWitter ={
    background:'#1da1f2',
    fontSize: '20px', 
    display: 'flex', 
    alignItems: 'center',
    justifyContent: 'space-between'
};
const LoginComp = () => {
    const styles = {
        marginRight: '10px',
        fontWeight: '500'
    };
    return (
        <>
            <main>
                <div className="boxlogin">
                    <div className="inner-box">
                        <div className="forms-wrap">
                            <form onSubmit="" className="sign-in-form">
                                <div className="logo">
                                    <img src={logo} alt="Marry meals" />
                                </div>
                                <div className="heading">
                                    <h2>Welcome Back</h2>
                                    <h6>Not yet have account?</h6>
                                    <a href="/register" className="toggle">Register</a>
                                </div>
                                <div className="actual-form">
                                    <div className="input-wrap">
                                        <label className="label">Name</label>
                                        <input
                                            type="text"
                                            name="email"
                                            placeholder="Email" minLength={4} className="input-field" autoComplete="off" required />
                                    </div>
                                    <div className="input-wrap">
                                        <label className="label">Password</label>
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="Password" minLength={4} className="input-field" autoComplete="off" required />
                                    </div>
                                    <input type="submit" value="Login" className="sign-btn" />
                                    <div className="d-flex justify-content-center">
                                        <a href="#" className="btn  me-2" style={colorFacebook}><BsFacebook /></a>
                                        <a href="#" className="btn me-2" style={colorGoogle}><i className="fab fa-google" /> <SlSocialGoogle /></a>
                                        <a href="#" className="btn" style={colorTWitter}><i className="fab fa-twitter" /> <FiTwitter /></a>
                                    </div>

                                    <p className="text">
                                        Forgotten your password or you login datails?
                                        <a href="/term">Get help</a> Term
                                    </p>
                                </div>
                            </form>
                        </div>
                        <div className="carousel">
                            <div className="images-wrapper">
                                <img src="https://i.postimg.cc/jSmYwqYD/2754877-0-removebg-preview.png" className="image img-1 show" alt="" />
                            </div>

                            <div className="text-wrap">
                                <div className="text-group">
                                    <h3>Get your Action</h3>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </main>



        </>
    )
}

export default LoginComp;