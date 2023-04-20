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
      member,
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
              <img src={"http://localhost:8080/get-image/MEALS/" + meal.picture}/>
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