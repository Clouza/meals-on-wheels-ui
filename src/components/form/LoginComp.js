import React from "react";
import '../../css/form.css';
// Import Image
import logo from '../../assets/logo.png';
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