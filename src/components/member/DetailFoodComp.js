import React from "react";
import { MdOutlineHealthAndSafety } from 'react-icons/md';
import '../../css/detailfood.css'
const DetailFoodComp = () => {
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
            <h1>Food name</h1>
            <div className="options">
              <a href="/memberorder">Order</a>
            </div>
          </div>
          <div className="description">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus temporibus corporis repudiandae, consectetur nostrum nisi commodi placeat rerum molestias numquam nihil accusantium deleniti! Enim, nesciunt a quis amet hic officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nemo accusantium tempora facere doloremque cum iusto, ut neque, fuga omnis libero laborum ullam. At dolorum qui atque labore illo dignissimos.</p>

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