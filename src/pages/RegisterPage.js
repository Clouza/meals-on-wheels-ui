import React from "react";
import RegisterComp from "../components/form/RegisterComp";
import Footer from "../components/footer/Footer";
import NavbarMember from "../components/navbar/NavbarMember";
import Subscribe from "../components/subscribe/Subscribe";
const RegisterPage = () => {
    return(
        <>
            <NavbarMember/>
            <RegisterComp/>
            <Subscribe/>
            <Footer/>
        </>
    )
}
export default RegisterPage;