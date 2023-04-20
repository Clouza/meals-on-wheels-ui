import axios from "axios";
import Footer from "../../components/footer/Footer"
import NavbarMember from "../../components/navbar/NavbarMember"
import PartnersFoodList from "../../components/partners/PartnersFoodList"
import Service from "../../service/Service";
import { useState,useEffect } from "react";

const PartnerApplyOrderPage = () => {
  const [currentOrder, setCurrentOrders] = useState([]);
  const [rider,setRiders]=useState();
  const [selectedRider, setSelectedRider] = useState("");
    const fetchOrders = async (status) => {
        try {
          const currentResponse = await Service.partnerGetOrders(status);
          setCurrentOrders(currentResponse.data);
        } catch (error) {
          console.error("Error fetching orders", error);
        }
      };
      
      useEffect(() => {
        fetchOrders("FOOD IS PREPARED");
        Service.partnerGetRider().then(res=>{
          setRiders(res.data)
        })
      }, []);

      
      const apply=async(order)=>{
        const rider = (await Service.partnerGetSingleRider(selectedRider)).data
        const updatedOrder = { ...order, status: "FOOD IS ON THE WAY",rider:rider};
        console.log(updatedOrder)
        Service.partnerHandleOrder(updatedOrder).then(() => {
            fetchOrders("FOOD IS PREPARED")
            alert("Order applyed");
        });
      }
	return(
		<>
			<NavbarMember/>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      {currentOrder.map((order) => (
            
            <div className="cardbox">
                <div className="card">
                    <div className="card-image">
                        <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Gambar" />
                    </div>
                    <div className="card-content">
                        <h4>{order.meals.name}</h4>
                        <p>Member Name :{order.member.userDetails.name}</p>
                        <p>Delivery Address :{order.member.userDetails.address}</p>
                        <p>Phone Number :{order.member.userDetails.phoneNumber}</p>
                    </div>
                      <select value={selectedRider} onChange={(event) => setSelectedRider(event.target.value)}>
                        <option value="">Select a rider</option>
                        {rider && rider.map((rider) => (
                            <option 
                                key={rider} 
                                value={rider.username} 
                                disabled={rider.riders.status === "BUSY"}
                            >
                                {rider.userDetails.name} | {rider.riders.status}
                            </option>
                        ))}
                      </select>
                    <div className="card-apply ">
                      <button onClick={()=>apply(order)}>Apply</button>
                    </div>
                    <div className="card-cancel">
                        <button>Cancel</button>
                    </div>
                </div>
            </div>
            ))}

<br /><br /><br /><br /><br />
			<Footer/>
		</>
	)
}

export default PartnerApplyOrderPage;