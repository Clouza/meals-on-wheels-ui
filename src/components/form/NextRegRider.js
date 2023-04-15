import React,{ useState } from "react";
import '../../css/form.css';
import { useLocation,useNavigate } from 'react-router-dom';
import Service from "../../service/Service";
// Import Image
import logo from '../../assets/logo.png';
const NextRegRider = () => {
    const styles = {
        marginRight: '10px',
        fontWeight: '500'
    };
    // get data from form pervious input
    const location = useLocation();
    const loginCredentials = location.state.loginCredent;

    // define input
    const [vehicle, setVehicle] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const navigate = useNavigate();

    // handle the input
    const handleFileChange = event => {
        setSelectedFile(event.target.files[0]);
    };
    const handleVehicleChange = event => {
        setVehicle(event.target.value);
    };

    // handle form
    const handleFormSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('file', selectedFile);
        formData.append('username', loginCredentials.username);
        formData.append('text', vehicle);

    
        Service.registerRider(formData)
        .then(res => {
          // redirect page to login page
          navigate('/login');
        })
        .catch(error => console.error(error));
    };

    return (
        <>
            <main>
                <div className="boxRegRider">
                    <div className="inner-box">
                        <div className="forms-wrap">
                            <form onSubmit={handleFormSubmit} className="sign-in-form">
                                <div className="logo">
                                    <img src={logo} alt="Marry meals" />
                                </div>
                                <div className="heading">
                                    <h2>Become a rider now!</h2>
                                    {/* <h6>Not yet have account?</h6>
                                    <a href="/register" className="toggle">Register</a> */}
                                </div>
                                <div className="actual-form">
                                    <div className="input-wrap">
                                        <label className="label">Vehicle</label>
                                        <input
                                            type="text"
                                            name="vehicle"
                                            value={vehicle}
                                            onChange={handleVehicleChange}
                                            placeholder="vehicle" minLength={4} className="input-field" autoComplete="off" required />
                                    </div>
                                    <div className="input-wrap">
                                        <label className="label">Driving License</label>
                                        <input
                                            type="file"
                                            name="driving license"
                                            onChange={handleFileChange}
                                            placeholder="driving license" className="input-field" autoComplete="off" required />
                                    </div>
                                    <input type="submit" value="Register" className="sign-btn" />
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
                                    <h3>Become a Rider</h3>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </main>



        </>
    )
}

export default NextRegRider;