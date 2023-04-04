import React,{useEffect} from "react";
import '../../css/landing.css';

//import AOS
import Aos from 'aos';
import 'aos/dist/aos.css'

const RiderHeading = () =>{
        // Use effect animation duration
        useEffect(() => {
            Aos.init({duration: 2000})
        },[])

    return(
        <div className="support container section">
            <div className="sectionContainer">
                <div data-aos='fade-up' data-aos-duration='3000' className="titlesDiv">
                    <small>Dashboard Rider Page</small>
                    <h2>Your list delivery schedule</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s,</p>
                </div>
            </div>

        </div>
    )
}
export default RiderHeading;