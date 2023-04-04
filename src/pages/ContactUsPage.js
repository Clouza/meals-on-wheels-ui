import React from "react";
import NavbarMember from "../components/navbar/NavbarMember";
import Contact from "../components/contact/Contact";
import Subscribe from "../components/subscribe/Subscribe";
import Footer from "../components/footer/Footer";


const ContactUsPage = () =>{
    return(
        <>
        <NavbarMember/>
        <Contact/>
        <Subscribe/>
        <Footer/>
        </>
    )
}
export default ContactUsPage;