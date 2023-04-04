import React from "react";
import Footer from "../components/footer/Footer";
import NavbarMember from "../components/navbar/NavbarMember";
import Subscribe from "../components/subscribe/Subscribe";
import TermCon from "../components/termCon/TermCon";

const TermAndConPage  = () =>{
    return(
        <>
        <NavbarMember/>
        <TermCon/>
        <Subscribe/>
        <Footer/>
        </>
    )
}
export default TermAndConPage;