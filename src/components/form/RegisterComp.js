import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/form.css';
// Import Image
import logo from '../../assets/logo.png';
import Service from '../../service/Service';
const RegisterComp = () => {
    const styles = {
        marginRight: '10px',
        fontWeight: '500'
    };
    // define each input
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [selectedOption, setSelectedOption] = useState('');
    const navigate = useNavigate();

    // handle every input
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    // post the user login credentials to the database
    const handleFormSubmit = (event) => {
        event.preventDefault();
        const data={
            username:username,
            email:email,
            password:password,
            role:selectedOption
        }
        const loginCredentials={
            username:username
        }
        
        Service.register(data)
        .then(response => {
            if (selectedOption === 'RIDER') {
                navigate('/regrider', { state: { loginCredent: loginCredentials } });
            } else if (selectedOption === 'MEMBER') {
                navigate('/regmember', { state: { loginCredent: loginCredentials } });
            } else {
                Service.registerPartner({username},loginCredentials).then(res=>{
                    navigate('/login');
                })
            }
        })
        .catch(error => {
            console.error(error);
        });
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
                                    <a href="/login" className="toggle">Login</a>
                                </div>
                                <div className="actual-form">
                                    <div className="input-wrap">
                                        <label className="label">Name</label>
                                        <input
                                            type="text"
                                            name="username"
                                            placeholder="Username" minLength={4} className="input-field" autoComplete="off" required 
                                            value={username}
                                            onChange={handleUsernameChange}
                                        />
                                    </div>
                                    <div className="input-wrap">
                                        <label className="label">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email" minLength={4} className="input-field" autoComplete="off" required 
                                            value={email}
                                            onChange={handleEmailChange}
                                        />
                                    </div>
                                    <div className="input-wrap">
                                        <label className="label">Password</label>
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="Password" minLength={4} className="input-field" autoComplete="off" required 
                                            value={password}
                                            onChange={handlePasswordChange}
                                        />
                                    </div>
                                    <div className="heading">
                                        <h4>Register As :</h4>
                                    </div>

                                    <div className="input-wrap">
                                        <input type="radio"
                                            id="rider"
                                            name="option"
                                            value="RIDER"
                                            checked={selectedOption === 'RIDER'}
                                            onChange={handleOptionChange} />

                                        <label style={styles} htmlFor="rider">Rider</label>

                                        <input type="radio"
                                            id="member"
                                            name="option"
                                            value="MEMBER"
                                            checked={selectedOption === 'MEMBER'}
                                            onChange={handleOptionChange} />
                                        <label style={styles} htmlFor="member">Member</label>

                                        <input type="radio" 
                                            id="partner" 
                                            name="option" 
                                            value="PARTNER"
                                            checked={selectedOption === 'PARTNER'}
                                            onChange={handleOptionChange} />
                                        <label style={styles} htmlFor="partner">Partner</label>
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