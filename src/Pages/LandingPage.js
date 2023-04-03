import React from "react";
import '../css/Landing.css';
import NavbarMember from "../Component/Navbar/NavbarMember";
import Home from "../Component/Home/Home";
import Lounge from "../Component/Lounnge/Lounge";
import Info from "../Component/Info/Info";
import Footer from "../Component/Footer/Footer";
import Search from "../Component/Search/Search";
import Support from "../Component/Support/Support";
import Partner from "../Component/Partner/Partner";
import Subscribe from "../Component/Subscribe/Subscribe";
const LandingPage =()=>{
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
        {/*
        <Search/>
        
         */}
        </>
        
    )
}
export default LandingPage;