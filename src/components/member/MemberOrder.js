import '../../css/partner/partner.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from 'react';

import MemberFoodCard from './MemberFoodCard';

import Service from '../../service/Service';

import MemberFoodCardHistory from './MemberFoodCardHistory';
import ReactStars from "react-rating-stars-component";
import React from "react";
import { render } from "react-dom";



const MemberOrder = () => {
  const [activeTab, setActiveTab] = useState("currentOrder");
  const [currentOrder, setCurrentOrders] = useState([]);
  const [finishedOrder, setFinishedOrders] = useState([]);
  const [ridersRating, setRiderRating] = useState(0);
  const [mealsRating, setMealRating] = useState(0);
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const fetchOrders = async () => {
    try {
      const currentResponse = await Service.memberGetOrders("FOOD IS PREPARED");
      const ontheWayResponse = await Service.memberGetOrders("FOOD IS ON THE WAY");
      setCurrentOrders([...currentResponse.data, ...ontheWayResponse.data]);
      const finishedResponse = await Service.memberGetOrders("ARRIVED");
      const doneResponse = await Service.memberGetOrders("DONE");
      setFinishedOrders([...finishedResponse.data,...doneResponse.data]);
    } catch (error) {
      console.error("Error fetching orders", error);
    }
  };
  
  useEffect(() => {
    fetchOrders();
  }, []);

  const cancleOrder =(id)=>{
    Service.deleteOrder(id).then(res=>{
      alert(res.data.response)
      fetchOrders()
    })
  }

  const riderRatingChange = (newRating) => {
    setRiderRating(newRating)
  };
  const mealRatingChange = (newRating) => {
    setMealRating(newRating)
  };

  const giveRating=(riders,meals,order)=>{
    const data={
      riders,meals,ridersRating,mealsRating
    }
    Service.giveRatings(data).then(res=>{
      const updatedOrder = { ...order, status: "DONE" }; // create a new order object with updated status
      Service.orderMeals(updatedOrder)
      alert(res.data.response)
      fetchOrders()
    })

  }
  return (
    <>
      <div className='partner container mb-4'>
      {/* Tabs navs */}
      <ul className="nav nav-tabs mb-3" id="ex1" role="tablist">
        <li className="nav-item" role="presentation">
          <a
            className={activeTab === "currentOrder" ? "nav-link active" : "nav-link"}
            id="currentOrder"
            data-mdb-toggle="tab"
            href="#currentOrder"
            role="tab"
            aria-controls="currentOrder"
            aria-selected={activeTab === "currentOrder"}
            onClick={() => handleTabClick("currentOrder")}
          >
            Current Order
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className={activeTab === "history" ? "nav-link active" : "nav-link"}
            id="history"
            data-mdb-toggle="tab"
            href="#history"
            role="tab"
            aria-controls="history"
            aria-selected={activeTab === "history"}
            onClick={() => handleTabClick("history")}
          >
            History
          </a>
        </li>
      </ul>
      {/* Tabs navs */}

      {/* Tabs content */}
      <div className="tab-content" id="currentOrder">
        <div
          className={
            activeTab === "currentOrder"
              ? "tab-pane fade show active"
              : "tab-pane fade"
          }
          id="currentOrder"
          role="tabpanel"
          aria-labelledby="ex1-tab-1"
        >
          <div className="row justify-content-center mb-3">
          {currentOrder.map((order) => (
					<div className="col-md-12 col-xl-10">
						<div className="card shadow-0 border rounded-3">
							<div className="card-body">
								<div className="row">
									<div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
										<div className="bg-image hover-zoom ripple rounded ripple-surface">
											<img
												src={"http://localhost:8080/get-image/MEALS/"+order.meals.picture}
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
                    <p>Rider Name :{order.rider.userDetails.name}</p>
                    <p>Delivery Address :{order.member.userDetails.address}</p>
                    <p>Phone Number :{order.rider.userDetails.phoneNumber}</p>
										</p>
									</div>
									<div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
										<div className="d-flex flex-column py-4">
											<button className="btn btn-warning btn-sm my-4" onClick={()=>cancleOrder(order.orderHistoryId)} type="button">
											  Cancel
											</button>
										</div>
									</div>
								</div> 
							</div>
						</div>
					</div>
          ))}
				</div>

        </div>
        <div
          className={
            activeTab === "history"
              ? "tab-pane fade show active"
              : "tab-pane fade"
          }
          id="history"
          role="tabpanel"
          aria-labelledby="history"
        >
          <div className="row justify-content-center mb-3">
          {finishedOrder.map((order) => (
					<div className="col-md-12 col-xl-10">
						<div className="card shadow-0 border rounded-3">
							<div className="card-body">
								<div className="row">
									<div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
										<div className="bg-image hover-zoom ripple rounded ripple-surface">
											<img
												src={"http://localhost:8080/get-image/MEALS/"+order.meals.picture}
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
                    <p>Rider Name :{order.rider.userDetails.name}</p>
                    <p>Delivery Address :{order.member.userDetails.address}</p>
                    <p>Phone Number :{order.rider.userDetails.phoneNumber}</p>
										</p>
									</div>
									<div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
										<div className="d-flex flex-column py-4">
                      {order.status != "DONE"
                      ?
                      <>
                      Rate Rider
											<ReactStars
                        count={5}
                        onChange={riderRatingChange}
                        size={24}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                      />
                      Rate Meals
											<ReactStars
                        count={5}
                        onChange={mealRatingChange}
                        size={24}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                      />
                      <button className='btn btn-success' onClick={()=>giveRating(order.rider.riders,order.meals,order)}>Send</button>
                      </>
                      :
                      <button className='btn btn-success' disabled>You have rate this order</button>
                      }
										</div>
									</div>
								</div> 
							</div>
						</div>
					</div>
          ))}
				</div>
          {/* <MemberFoodCardHistory/> */}
        </div>
      </div>
      {/* Tabs content */}
      </div>
    </>
  );
}
 

export default MemberOrder