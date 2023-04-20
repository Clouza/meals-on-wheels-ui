import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Service from "../../../service/Service";
import { useState,useEffect } from "react";
const TableOrder = ()=>{
  const [currentOrder, setCurrentOrders] = useState([]);
  const [historyOrder, setHistoryOrders] = useState([]);
  const [rider,setRiders]=useState();
  const [selectedRider, setSelectedRider] = useState("");
    const fetchOrders = async (status) => {
        try {
          const currentResponse = await Service.AdminGetOrders(status);
          setCurrentOrders(currentResponse.data);
        } catch (error) {
          console.error("Error fetching orders", error);
        }
      };
      
      useEffect(() => {
        fetchOrders("FOOD IS PREPARED");
        Service.AdminGetRider().then(res=>{
          setRiders(res.data)
        })
        const getHistory = async ()=>{
          const ontheWayResponse = await Service.AdminGetOrders("FOOD IS ON THE WAY");
          const finishedResponse = await Service.AdminGetOrders("ARRIVED");
          const doneResponse = await Service.AdminGetOrders("DONE");
          setHistoryOrders([...finishedResponse.data,...doneResponse.data,...ontheWayResponse.data]);
        }
        getHistory()
      }, []);

      
      const apply=async(order)=>{
        const rider = (await Service.AdminGetSingleRider(selectedRider)).data
        const updatedOrder = { ...order, status: "FOOD IS ON THE WAY",rider:rider};
        console.log(updatedOrder)
        Service.AdminHandleOrder(updatedOrder).then(() => {
            fetchOrders("FOOD IS PREPARED")
            alert("Order applyed");
        });
      }
      return(
        <div>
          <h2>Partner Side</h2>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link active" data-bs-toggle="tab" href="#tab1">Pending Order</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" href="#tab2">Order List</a>
            </li>
          </ul>

          <div className="tab-content">
            <div className="tab-pane fade show active" id="tab1">
            <table>
              <thead>
                <tr>
                  <th>Meal Name</th>
                  <th>Stock</th>
                  <th>createdAt</th>
                  <th>Delivery Address</th>
                  <th>Select Rider</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {currentOrder.map((order, index) => (
                  <tr key={index}>
                    <td>{order.meals.name}</td>
                    <td>{order.meals.stock}</td>
                    <td>{order.createdAt}</td>
                    <td>{order.member.userDetails.Address}</td>
                    <td>
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
                    </td>
                    <td>
                    <button onClick={()=>apply(order)}>Apply</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>



            <div className="tab-pane fade" id="tab2">
            <table>
              <thead>
                <tr>
                  <th>Meal Name</th>
                  <th>Stock</th>
                  <th>Created At</th>
                  <th>Member</th>
                  <th>Delivery Address</th>
                  <th>Rider</th>
                </tr>
              </thead>
              <tbody>
                {historyOrder.map((order, index) => (
                  <tr key={index}>
                    <td>{order.meals.name}</td>
                    <td>{order.meals.stock}</td>
                    <td>{order.createdAt}</td>
                    <td>{order.member.userDetails.name}</td>
                    <td>{order.member.userDetails.address}</td>
                    <td>{order.rider.userDetails.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </div>
        </div>
        
      )
}
export default TableOrder