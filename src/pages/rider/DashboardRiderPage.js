import React from "react";
import Footer from "../../components/footer/Footer";
import NavbarMember from "../../components/navbar/NavbarMember";
import Subscribe from "../../components/subscribe/Subscribe";
import Home from "../../components/home/Home";
import RiderHeading from "../../components/support/RiderHeading";
import '../../css/longCard.css';
import { useState,useEffect } from "react";
import Service from "../../service/Service";

// Style on longcard.css
const DashboardRiderPage = () => {
    const [currentOrder, setCurrentOrders] = useState([]);
    const fetchOrders = async (status) => {
        try {
          const currentResponse = await Service.riderGetOrders(status);
          setCurrentOrders(currentResponse.data);
        } catch (error) {
          console.error("Error fetching orders", error);
        }
      };
      
      useEffect(() => {
        fetchOrders("FOOD IS ON THE WAY");
      }, []);

      
      const finishOrder=async(order)=>{
        const user = (await Service.getUser()).data
        const updatedOrder = { ...order, status: "ARRIVED",rider:user.riders };
        console.log(updatedOrder)
        Service.handleOrder(updatedOrder).then(() => {
            fetchOrders("FOOD IS ON THE WAY")
            alert("Order Finished");
        });
      }

    return (
        <>
            <NavbarMember />
            {/* <Home /> */}
            <br /><br /><br /><br /><br />
            <RiderHeading />
            {currentOrder.map((order) => (
            
            <div className="cardbox">
                <div className="card">
                    <div className="card-image">
                        <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Gambar" />
                    </div>
                    <div className="card-content">
                        <h4>{order.meals.name}</h4>
                        <p>Deskripsi card</p>
                        <p>Deskripsi card</p>
                        <p>Deskripsi card</p>
                    </div>
                    <div className="card-apply">
                        
                            <button onClick={()=>finishOrder(order)}>Finish</button>
                    </div>
                    <div className="card-cancel">
                        <button>Cancel</button>
                    </div>
                </div>
            </div>
            ))}
            <br /><br /><br /><br /><br />

            {/* <Subscribe /> */}
            <Footer />
        </>
    )
}
export default DashboardRiderPage;