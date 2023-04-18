import React, { useEffect } from "react";
import '../../css/landing.css';
//import img
import support from '../../assets/support.png';

//import AOS
import Aos from 'aos';
import 'aos/dist/aos.css'

const SupportMember = () => {
    // Use effect animation duration
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <div className="support container section">
            <div className="sectionContainer">
                <div className="titlesDiv">
                    <small>MerryMeals Food</small>
                    <h2>You can Choose any food here</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.</p>
                </div>
            </div>

        </div>
    )
}
export default SupportMember;