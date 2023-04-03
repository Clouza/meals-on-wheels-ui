import React,{useEffect} from "react";
import '../../css/Landing.css';
//import image
import phd from '../../assets/phd.jpg';
import phdlogo from '../../assets/image 39.png';

import kfc from '../../assets/kfc.jpg';
import kfclogo from '../../assets/image 40.png';

import mixue from '../../assets/mixue.jpg';
import mixuelogo from '../../assets/image 41.png';

import sturbuk from '../../assets/sturbuk.jpg';
import sturbuklogo from '../../assets/starbuckslogorgb 2.png'

//import AOS
import Aos from 'aos';
import 'aos/dist/aos.css';

const partner = [
    {
        id: 1,
        partnerImage: phd,
        logoImage: phdlogo

    },
    {
        id: 2,
        partnerImage: kfc,
        logoImage: kfclogo

    },
    {
        id: 3,
        partnerImage: mixue,
        logoImage: mixuelogo

    },
    {
        id: 4,
        partnerImage: sturbuk,
        logoImage: sturbuklogo

    }
]

const Partner = () => {
     // Use effect animation duration
     useEffect(() => {
        Aos.init({duration: 2000})
    },[])
    return (
        <div className="partner container section">
            <div className="sectionContainer">
                <h2 data-aos='fade-up' data-aos-duration='2500' >Our Partner</h2>
            </div>
            <div className="partnerContainer grid">
                
                {
                    partner.map(({id,partnerImage,logoImage }) => {
                        return (
                            // {/* card single partner */}
                            <div data-aos='fade-up' data-aos-duration='2000' key={id} className="singlePartner">
                                <img src={partnerImage} className="partnerImage" />
                                <div className="partnerDetails">
                                    <div className="partnerPicture">
                                        <img data-aos='fade-up' data-aos-duration='1000' src={logoImage} className="logoImage" />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Partner;
