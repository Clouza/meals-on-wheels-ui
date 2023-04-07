import React,{ useState } from "react";
import '../../css/form.css';
import { useLocation,useNavigate } from 'react-router-dom';
import Service from "../../service/Service";

// Import Image
import logo from '../../assets/logo.png';
const NextRegMember = () => {
    const styles = {
        marginRight: '10px',
        fontWeight: '500'
    };
    // get data from form pervious input
    const location = useLocation();
    const loginCredentials = location.state.loginCredent;
    
    // define message and file input
    const [message, setMessage] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const navigate = useNavigate();

    // handle the input
    const handleFileChange = event => {
        setSelectedFile(event.target.files[0]);
    };
    const handleMessageChange = event => {
        setMessage(event.target.value);
    };
    
    // handle form
    const handleFormSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
        // this will fill the argument in spring boot method register in MemberController
        formData.append('file', selectedFile);
        formData.append('username', loginCredentials.username);
        formData.append('message', message);
    
        Service.uploadMemberEvidence(formData,loginCredentials)
          .then(res => {
            // redirect page to login page
            navigate('/login');
          })
          .catch(error => console.error(error));
    };

    return (
        <>
            <main>
                <div className="boxRegMember">
                    <div className="inner-box">
                        <div className="forms-wrap">
                            <form onSubmit={handleFormSubmit} className="sign-in-form">
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
                                            value={message}
                                            onChange={handleMessageChange}
                                            placeholder="Message" minLength={4} className="input-field" autoComplete="off" required/>
                                    </div>
                                    <div className="input-wrap">
                                        <label className="label">input evidence</label>
                                        <input
                                            type="file"
                                            name="evidence" 
                                            onChange={handleFileChange}
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