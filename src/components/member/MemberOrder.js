import '../../css/partner/partner.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from 'react';

import MemberFoodCard from './MemberFoodCard';

import Service from '../../service/Service';

import MemberFoodCardHistory from './MemberFoodCardHistory';




const MemberOrder = () => {
  const [activeTab, setActiveTab] = useState("currentOrder");
  const [currentOrder, setCurrentOrders] = useState([]);
  const [finishedOrder, setFinishedOrders] = useState([]);
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const fetchOrders = async () => {
    try {
      const currentResponse = await Service.getOrder("FOOD IS PREPARED");
      setCurrentOrders(currentResponse.data);
      const finishedResponse = await Service.getOrder("COMPLATE");
      setFinishedOrders(finishedResponse.data.orderHistories);
    } catch (error) {
      console.error("Error fetching orders", error);
    }
  };
  
  useEffect(() => {
    fetchOrders();
  }, []);
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
												src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
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
										<div className="d-flex flex-column py-4">
											<button className="btn btn-warning btn-sm my-4" type="button">
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
          <MemberFoodCardHistory/>
        </div>
      </div>
      {/* Tabs content */}
      </div>
    </>
  );
}
 

export default MemberOrder