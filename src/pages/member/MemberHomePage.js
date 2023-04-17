import React,{useEffect,useState} from "react";
import Footer from "../../components/footer/Footer";
import NavbarMember from "../../components/navbar/NavbarMember";
import Subscribe from "../../components/subscribe/Subscribe";
import Home from "../../components/home/Home";
import SupportMember from "../../components/support/SupportMember";
import { Link } from 'react-router-dom';
import '../../css/foodCard.css';
import Aos from 'aos';
import Service from "../../service/Service";
import axios from "axios";

const MemberHomePage = () => {
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        Aos.init({duration: 2000})
        try{
            Service.getMemberFoods(true).then(res=>{
                setMeals(res.data)
            })
        }catch (error) {
            console.error(error);
        }
        console.log(meals)
    },[])
    return (
        <>
            <NavbarMember />  
            <Home />
            <SupportMember />
            {meals.map((m,index)=>(
                <div data-aos='fade-up' data-aos-duration='2000' id={index} className="kotak">
                    <div className="box-stock">
                        <img src={"http://localhost:8080/get-image/MEALS/"+m.picture} alt="" />
                        <h4>{m.name}({m.stock})</h4>
                        <p>{m.category.name}</p>
                        <Link
                            className="btn-food"
                            to="/detailfood"
                        >
                            More
                        </Link>
                    </div>
                </div>
            ))}
            
            
            <Subscribe />
            <Footer />

        </>

    )
}
export default MemberHomePage;