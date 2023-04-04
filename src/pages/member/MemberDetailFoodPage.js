import React from "react";
import NavbarMember from "../../components/navbar/NavbarMember";
import DetailFoodComp from "../../components/member/DetailFoodComp";
import Subscribe from "../../components/subscribe/Subscribe";
import Footer from "../../components/footer/Footer";

const MemberDetailFoodPage = () => {
    return(
        <>
            <NavbarMember/>
            <DetailFoodComp/>
            <Subscribe/>
            <Footer/>
        </>
    )
}
export default MemberDetailFoodPage;