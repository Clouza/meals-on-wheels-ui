import React, { useEffect } from "react";
import '../../css/Landing.css';

// import img
import support from '../../assets/support.png';

// import AOS
import Aos from 'aos';
import 'aos/dist/aos.css'

const Support = () => {
    // Use effect animation duration
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <div className="support container section">
            <div className="sectionContainer">
                <div data-aos='fade-up' data-aos-duration='3000' className="titlesDiv">
                    <small>MerryMeals Support</small>
                    <h2>Share happiness with Meals On Wheels</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries,</p>
                </div>

                <div className="infoDiv grid">
                    <div className="textDiv grid">

                        <div data-aos='fade-up' data-aos-duration='2500' className="singleInfo">
                            <span className="number">01</span>
                            <h4>Share happiness with Meals On Wheels</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has</p>
                        </div>

                        <div data-aos='fade-up' data-aos-duration='1500' className="singleInfo">
                            <span className="number colorOne">02</span>
                            <h4>Share happiness with Meals On Wheels</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has</p>
                        </div>

                        <div data-aos='fade-up' data-aos-duration='500' className="singleInfo">
                            <span className="number colorTwo">03</span>
                            <h4>Share happiness with Meals On Wheels</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has</p>
                        </div>

                    </div>

                    <div data-aos='fade-up' data-aos-duration='2000' className="imgDiv">
                        <img src={support} alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Support;