import React, { useEffect } from "react";
import '../../css/landing.css';

//import image
import lounge from '../../assets/lounge.png'

//import AOS
import Aos from 'aos';
import 'aos/dist/aos.css';

const Lounge = () => {
    // Use effect animation duration
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    const styles = {
        fontWeight: 700
    };
    return (
        <div className="lounge container section">
            <div className="sectionContainer grid">

                <div data-aos='fade-up' data-aos-duration='3000' className="imgDiv">
                    <img src={lounge} />
                </div>

                <div className="textDiv">
                    <h2 data-aos='fade-right' data-aos-duration='2500' style={styles}>Meals pasti enak</h2>

                    <div className="grids grid">

                        <div data-aos='fade-up' data-aos-duration='2200' className="singleGrid">
                            <span style={styles} className="gridTitle">
                                Senang membantu bersama
                            </span>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry
                            </p>
                        </div>

                        <div data-aos='fade-up' data-aos-duration='2000' className="singleGrid">
                            <span style={styles} className="gridTitle">
                                Senang membantu bersama
                            </span>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry
                            </p>
                        </div>

                        <div data-aos='fade-up' data-aos-duration='1800' className="singleGrid">
                            <span style={styles} className="gridTitle">
                                Senang membantu bersama
                            </span>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry
                            </p>
                        </div>

                        <div data-aos='fade-up' data-aos-duration='1500' className="singleGrid">
                            <span style={styles} className="gridTitle">
                                Senang membantu bersama
                            </span>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry
                            </p>
                        </div>

                    </div>

                </div>


            </div>
        </div>
    )
}
export default Lounge;