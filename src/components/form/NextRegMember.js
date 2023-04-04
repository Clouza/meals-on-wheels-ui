import React from "react";
import '../../css/form.css';
// Import Image
import logo from '../../assets/logo.png';
const NextRegMember = () => {
    const styles = {
        marginRight: '10px',
        fontWeight: '500'
    };
    return (
        <>
            <main>
                <div className="boxRegMember">
                    <div className="inner-box">
                        <div className="forms-wrap">
                            <form onSubmit="" className="sign-in-form">
                                <div className="logo">
                                    <img src={logo} alt="Marry meals" />
                                </div>
                                <div className="heading">
                                    <h2>Get Submit</h2>
                                    <h6>make sure evidence</h6>
                                   
                                </div>
                                <div className="actual-form">
                                    <div className="input-wrap">
                                        <label className="label">Message</label>
                                        <input
                                            type="text"
                                            name="message"
                                            placeholder="Email" minLength={4} className="input-field" autoComplete="off" required />
                                    </div>
                                    <div className="input-wrap">
                                        <label className="label">input evidence</label>
                                        <input
                                            type="file"
                                            name="evidence"
                                            placeholder="evidence" className="input-field" autoComplete="off" required />
                                    </div>
                                    <input type="submit" value="Register" className="sign-btn" />
                                    <p className="text">
                                        file maximum size 10mb
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
                                    <h3>member evidence</h3>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </main>



        </>
    )
}

export default NextRegMember;