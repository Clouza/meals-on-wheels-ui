import React,{useEffect} from "react";
import '../../css/landing.css';
//import img
import support from '../../assets/support.png';

//import AOS
import Aos from 'aos';
import 'aos/dist/aos.css'

const OrderMemberHeading = () =>{
        // Use effect animation duration
        useEffect(() => {
            Aos.init({duration: 2000})
        },[])

    return(
        <>
        <br /><br /><br /><br /><br />
        <div className="support container section">
        <div className="sectionContainer">
            <div data-aos='fade-up' data-aos-duration='3000' className="titlesDiv">
                <small>Your Order Food</small>
                <h2>All the food you order is here</h2>
            </div>
        </div>

    </div></>
        
    )
}
export default OrderMemberHeading;