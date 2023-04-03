import React,{useEffect} from "react";
import '../../css/Landing.css';

// import icon
import {RxCalendar} from 'react-icons/rx';
import {BsShieldCheck } from 'react-icons/bs';
import {BsBookmarkCheck} from 'react-icons/bs';

//import AOS
import Aos from 'aos';
import 'aos/dist/aos.css';

const Info = () => {
     // Use effect animation duration
     useEffect(() => {
        Aos.init({duration: 2000})
    },[])
    const styles = {
        color: 'white',
        fontWeight: 700,
      };
    return (
        <div className="info section">
            <div className="infoContainer container">
                <div className="tittleDiv flex">
                    <h2 data-aos='fade-up' data-aos-duration='3000' style={styles} >Share happiness with Meals On Wheels</h2>
                    {/* <button className="btn">
                        View all
                    </button> */}
                </div>
                <div className="cardsDiv grid">

                    <div data-aos='fade-up' data-aos-duration='2000'  className="singleCard grid">
                        <div className="iconDiv colorTwo">
                            <RxCalendar className="icon"/>
                        </div>
                        <span className="cardTitle">Meals On Wheels</span>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                    </div>

                    <div data-aos='fade-up' data-aos-duration= '1000' className="singleCard grid">
                        <div className="iconDiv ">
                            <BsShieldCheck className="icon"/>
                        </div>
                        <span className="cardTitle">lawful and safe</span>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                    </div>

                    <div data-aos='fade-up' data-aos-duration='500' className="singleCard grid">
                        <div className="iconDiv colorOne">
                            <BsBookmarkCheck className="icon "/>
                        </div>
                        <span className="cardTitle">food stored safely</span>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Info;