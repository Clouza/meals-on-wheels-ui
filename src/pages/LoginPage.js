import React from "react";
import Footer from "../components/footer/Footer";
import NavbarMember from "../components/navbar/NavbarMember";
import Subscribe from "../components/subscribe/Subscribe";
import LoginComp from "../components/form/LoginComp";
const LoginPage = () => {
    return(
        <>
            <NavbarMember/>
            <LoginComp/>
            <Subscribe/>
            <Footer/>
        </>
    )
}
export default LoginPage;