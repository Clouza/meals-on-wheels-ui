import React, { useState, useContext } from "react";
import '../../css/form.css';
import { useNavigate } from 'react-router-dom';
import { BsFacebook } from 'react-icons/bs';
import { SlSocialGoogle } from 'react-icons/sl';
import { FiTwitter } from 'react-icons/fi';
import AuthContext from "../../authContext/auth-context";
import { useForm } from "react-hook-form";
import axios from 'axios';
// Import Image
import logo from '../../assets/logo.png';
import Service from "../../service/Service";
const colorFacebook = {
    background: '#1877f2',
    fontSize: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
};
const colorGoogle = {
    background: '#ea4335',
    fontSize: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
};
const colorTWitter = {
    background: '#1da1f2',
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
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const authCtx = useContext(AuthContext);
    const [invalid, setInvalid] = useState(false);
    const {reset } = useForm();

    const handleUsernameChange = event => {
        setUsername(event.target.value);
    };
    const handlePasswordChange = event => {
        setPassword(event.target.value);
    };
    // const handleFormSubmit = (data) => {
    //     // event.preventDefault();
    //     // const data = {
    //     //     username: username,
    //     //     password: password
    //     // }
    //     // Service.login(data).then(res=>{
    //     //     sessionStorage.setItem('token', res.data.response);
    //     //     navigate("/");
    //     // })

    //     Service.login(data.username, data.password)
    //         .then((res) => {
    //             authCtx.login(res.data.token);
    //             authCtx.redirectLogin(res.data.role);
    //             reset();
    //         })
    //         .catch((err) => {
    //             setInvalid(true);
    //         });
    // };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const data = {
          username: username,
          password: password
        }
        Service.login(data).then(res => {
          sessionStorage.setItem('token', res.data.response);
          authCtx.login(res.data.token);
      
          // Mengambil role user dari endpoint API
          Service.getUser()
            .then(response => {
              const role = response.data.role;
              authCtx.redirectLogin(role);
              reset();
      
              // Redirect ke halaman sesuai role
              switch (role) {
                case 'MEMBER':
                  navigate('/member');
                  break;
                case 'RIDER':
                  navigate('/rider');
                  break;
                case 'PARTNER':
                  navigate('/partnerFoodList');
                  break;
                case 'ADMIN':
                  navigate('/admin');
                  break;
                default:
                  navigate('/');
              }
            });
        });
      };

    return (
        <>
            <main>
                <div className="boxlogin">
                    <div className="inner-box">
                        <div className="forms-wrap">
                            <form onSubmit={handleFormSubmit} className="sign-in-form">
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
                                        <label className="label">Username</label>
                                        <input
                                            type="text"
                                            name="email"
                                            value={username}
                                            onChange={handleUsernameChange}
                                            placeholder="Email" minLength={4} className="input-field" autoComplete="off" required />
                                    </div>
                                    <div className="input-wrap">
                                        <label className="label">Password</label>
                                        <input
                                            type="password"
                                            name="password"
                                            value={password}
                                            onChange={handlePasswordChange}
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