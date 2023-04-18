import React from "react";
import { MdOutlineHealthAndSafety } from 'react-icons/md';
import { useLocation,useNavigate } from 'react-router-dom';
import '../../css/detailfood.css'
import Service from "../../service/Service";
const DetailFoodComp = () => {
  // get data from form pervious input
  const location = useLocation();
  const meal = location.state.mealDetail;
  const navigate = useNavigate()
  const order =async ()=>{
    const member = (await Service.getUser()).data
    const data ={
      status : "FOOD IS PREPARED",
      meals:meal,
      member:member.members,
    }
    Service.orderMeals(data).then(res=>{
      alert(res.data.response)
      navigate("/memberorder")
    })
  }
    return (
        <div className="detailfood">
        <div className="boxfood">
          <div className="images">
            <div className="img-holder active">
              <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
            </div>
            <div className="img-holder">
              <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
            </div>
            <div className="img-holder">
              <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
            </div>
            <div className="img-holder">
              <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
            </div>
          </div>
          <div className="basic-info">
            <h1>{meal.name}</h1>
            <div className="options">
              <button className="btn btn-success" onClick={()=>order()}>Order</button>
              {/* <a href="/memberorder">Order</a> */}
            </div>
          </div>
          <div className="description">
            <p>{meal.description}</p>

            <ul className="social">
              <li><a href="#"><MdOutlineHealthAndSafety /></a></li>
              <li><a href="#"><MdOutlineHealthAndSafety /></a></li>
              <li><a href="#"><MdOutlineHealthAndSafety /></a></li>
            </ul>
          </div>
        </div>
      </div>
    )
}
export default DetailFoodComp;