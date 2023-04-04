import React from "react";
import Footer from "../components/footer/Footer";
import NavbarMember from "../components/navbar/NavbarMember";
import Subscribe from "../components/subscribe/Subscribe";
import NextRegMember from "../components/form/NextRegMember";
const RegisterMemberPage = () => {
    return(
        <>
            <NavbarMember/>
            <NextRegMember/>
            <Subscribe/>
            <Footer/>
        </>
    )
}
export default RegisterMemberPage;