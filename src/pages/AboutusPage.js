import React from "react";
import NavbarMember from "../components/navbar/NavbarMember";
import Lounge from "../components/lounge/Lounge";
import Info from "../components/info/Info";
import Footer from "../components/footer/Footer";
import Partner from "../components/partner/Partner";
import Subscribe from "../components/subscribe/Subscribe";
import SupportAboutUs from "../components/support/SupportAboutUs";
const AboutUsPage =()=>{
    return (
        <>
        <NavbarMember/>
        <SupportAboutUs/>
        <Info/>
        <Lounge/>
        <Partner/>
        <Subscribe/>
        <Footer/>
        </>
        
    )
}
export default AboutUsPage;