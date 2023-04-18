import React from "react";
import Footer from "../../components/footer/Footer";
import NavbarMember from "../../components/navbar/NavbarMember";
import Subscribe from "../../components/subscribe/Subscribe";
import BannerRider from "../../components/BannerRider/Banner";
import RiderHeadingDelivery from "../../components/support/RiderHeadingDelivery";
import { useState,useEffect } from "react";
import Service from "../../service/Service";

const ApplyDeliveryPage = () =>{
    const buttonA = {
        backgroundColor: "#DC6767"
    };
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
        
        const updatedOrder = { ...order, status: "ARRIVED" };
        console.log(updatedOrder)
        Service.handleOrder(updatedOrder).then(() => {
            fetchOrders("FOOD IS PREPARED")
            alert("Order Finished");
        });
      }
    return(
        <>
            <NavbarMember/>
            <RiderHeadingDelivery/>
            <BannerRider/>
						{currentOrder.map((order) => (
            <div className="">
							
				<div className="row justify-content-center mb-3">
					<div className="col-md-12 col-xl-10">
						<div className="card shadow-0 border rounded-3">
							<div className="card-body">
								<div className="row">
									<div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
										<div className="bg-image hover-zoom ripple rounded ripple-surface">
											<img
												src="https://i.ibb.co/cQJygXS/unnamed-1.png"
												className="w-100"
												alt="product image"
											/>
											<a href="#!">
												<div className="hover-overlay">
													<div
														className="mask"
														style={{ backgroundColor: 'rgba(253, 253, 253, 0.15)' }}
													></div>
												</div>
											</a>
										</div>
									</div>
									
									<div className="col-md-6 col-lg-6 col-xl-6">
										<h5>{order.meals.name}</h5>
										<p className="text-truncate mb-4 mb-md-0">
											Rider: <span>James</span> <br />
											Members Address: <span>Cebu, Philippines</span> <br />
											Status: <span>{order.status}</span>
										</p>
									</div>
									<div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
										<div className="d-flex flex-column mt-4">
										<button className="btn btn-primary btn-sm mt-2" onClick={()=>finishOrder(order)}>Complate</button>
										
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			 ))}
            <Footer/>
        </>
    )
}
export default ApplyDeliveryPage;