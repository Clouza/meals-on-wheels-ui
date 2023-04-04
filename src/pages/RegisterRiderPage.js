import React from "react";
import Footer from "../components/footer/Footer";
import NavbarMember from "../components/navbar/NavbarMember";
import Subscribe from "../components/subscribe/Subscribe";
import NextRegRider from "../components/form/NextRegRider";
const RegisterRiderPage = () => {
    return(
        <>
            <NavbarMember/>
            <NextRegRider/>
            <Subscribe/>
            <Footer/>
        </>
    )
}
export default RegisterRiderPage;