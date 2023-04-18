
import Service from "../../../service/Service";
import { useState,useEffect } from "react";
const TableOrder = ()=>{
  const [currentOrder, setCurrentOrders] = useState([]);
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
      }, []);

      
      const apply=async(order)=>{
        const rider = (await Service.AdminGetSingleRider(selectedRider)).data
        const updatedOrder = { ...order, status: "FOOD IS ON THE WAY",rider:rider.riders};
        console.log(updatedOrder)
        Service.AdminHandleOrder(updatedOrder).then(() => {
            fetchOrders("FOOD IS PREPARED")
            alert("Order applyed");
        });
      }
      return(
        <table>
            <thead>
              <tr>
                <th>Meal Name</th>
                <th>Member Name</th>
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
                  <td>{order.member.name}</td>
                  <td>{order.meals.stock}</td>
                  <td>{order.createdAt}</td>
                  <td>{order.member.createdAt}</td>
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
              {/* <tr>
                    <td>Nico</td>
                    <td>Bali,Indonesia</td>
                    <td>2384093248</td>
                    <td>18 y.o</td>
                    <td>20/2/2022</td>
                  </tr> */}
            </tbody>
          </table>
      )
}
export default TableOrder