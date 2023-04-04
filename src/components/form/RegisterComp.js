import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/form.css';
// Import Image
import logo from '../../assets/logo.png';
const RegisterComp = () => {
    const styles = {
        marginRight: '10px',
        fontWeight: '500'
    };
    const [selectedOption, setSelectedOption] = useState('');
    const navigate = useNavigate();

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (selectedOption === 'rider') {
            navigate('/regrider');
        } else if (selectedOption === 'member') {
            navigate('/regmember');
        }
    };
    return (
        <>
            <main>
                <div className="box">
                    <div className="inner-box">
                        <div className="forms-wrap">
                            <form onSubmit={handleFormSubmit} className="sign-in-form">
                                <div className="logo">
                                    <img src={logo} alt="Marry meals" />
                                </div>
                                <div className="heading">
                                    <h2>Get Join</h2>
                                    <h6>Already have account?</h6>
                                    <a href="/signup" className="toggle">Sign up</a>
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
                                        <label className="label">Email</label>
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
                                    <div className="heading">
                                        <h4>Register As :</h4>
                                    </div>

                                    <div className="input-wrap">
                                        <input type="radio"
                                            name="option"
                                            value="rider"
                                            checked={selectedOption === 'rider'}
                                            onChange={handleOptionChange} />

                                        <label style={styles} >Rider</label>

                                        <input type="radio"
                                            name="option"
                                            value="member"
                                            checked={selectedOption === 'member'}
                                            onChange={handleOptionChange} />
                                        <label style={styles} >Member</label>

                                        <input type="radio" id="partner" name="fav_language" value="JavaScript" />
                                        <label style={styles} for="partner">Partner</label>
                                    </div>

                                    <input type="submit" value="Next" className="sign-btn" />
                                    <p className="text">
                                        Forgotten your password or you login datails?
                                        <a href="/term">Get help</a> signing in
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
                                    <h3>Create your Account</h3>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </main>



        </>
    )
}

export default RegisterComp;