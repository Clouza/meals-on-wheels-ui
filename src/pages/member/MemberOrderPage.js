import React from "react";
import Footer from "../../components/footer/Footer";
import NavbarMember from "../../components/navbar/NavbarMember";
import Subscribe from "../../components/subscribe/Subscribe";
// import '../../css/longCard.css';
import '../../css/longCard.css';
import OrderMemberHeading from "../../components/support/OrderMemberHeading";

// for this style  <div className="detailfoodd">  <div className="boxfoodd"> on detail food.css
const MemberOrderPage = () => {
    return (
        <>
            <NavbarMember />
            <OrderMemberHeading />
            <div className="cardbox">
            <div className="card">
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Gambar" />
                </div>
                <div className="card-content">
                    <h4>Food Name</h4>
                    <p>Deskripsi card</p>
                    <p>Deskripsi card</p>
                    <p>Deskripsi card</p>
                </div>
                <div className="card-cancel">
                    <button>Cancel</button>
                </div>
            </div>

            <div className="card">
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Gambar" />
                </div>
                <div className="card-content">
                    <h4>Food Name</h4>
                    <p>Deskripsi card</p>
                    <p>Deskripsi card</p>
                    <p>Deskripsi card</p>
                </div>
                <div className="card-cancel">
                    <button>Cancel</button>
                </div>
            </div>
            </div>
            <Subscribe />
            <Footer />
        </>
    )
}
export default MemberOrderPage;