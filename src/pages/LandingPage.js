import React from "react";
import '../css/landing.css';

import NavbarMember from "../components/navbar/NavbarMember";
import Home from "../components/home/Home";
import Lounge from "../components/lounge/Lounge";
import Info from "../components/info/Info";
import Footer from "../components/footer/Footer";
import Support from "../components/support/Support";
import Partner from "../components/partner/Partner";
import Subscribe from "../components/subscribe/Subscribe";

const LandingPage = () => {
    return (
        <>
            <NavbarMember/>
            <Home/>
            <Support/>
            <Info/>
            <Lounge/>
            <Partner/>
            <Subscribe/>
            <Footer/>
        </>
    )
}
export default LandingPage;