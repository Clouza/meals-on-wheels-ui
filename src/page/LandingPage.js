import React from "react";
import '../css/landing.css';

import NavbarMember from "../component/navbar/NavbarMember";
import Home from "../component/home/Home";
import Lounge from "../component/lounge/Lounge";
import Info from "../component/info/Info";
import Footer from "../component/footer/Footer";
import Support from "../component/support/Support";
import Partner from "../component/partner/Partner";
import Subscribe from "../component/subscribe/Subscribe";

const LandingPage = () => {
    return (
        <>
            <NavbarMember />
            <Home />
            <Support />
            <Info />
            <Lounge />
            <Partner />
            <Subscribe />
            <Footer />
        </>

    )
}
export default LandingPage;