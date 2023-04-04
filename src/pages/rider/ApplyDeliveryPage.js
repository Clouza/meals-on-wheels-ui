import React from "react";
import Footer from "../../components/footer/Footer";
import NavbarMember from "../../components/navbar/NavbarMember";
import Subscribe from "../../components/subscribe/Subscribe";
import ApplyDeliver from "../../components/rider/ApplyDeliver";

const ApplyDeliveryPage = () =>{
    return(
        <>
            <NavbarMember/>
            <ApplyDeliver/>
            <Subscribe/>
            <Footer/>
        </>
    )
}
export default ApplyDeliveryPage;