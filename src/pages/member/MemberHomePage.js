import React,{useEffect} from "react";
import Footer from "../../components/footer/Footer";
import NavbarMember from "../../components/navbar/NavbarMember";
import Subscribe from "../../components/subscribe/Subscribe";
import Home from "../../components/home/Home";
import SupportMember from "../../components/support/SupportMember";
import { Link } from 'react-router-dom';
import '../../css/foodCard.css';
import Aos from 'aos';

const MemberHomePage = () => {
    useEffect(() => {
        Aos.init({duration: 2000})
    },[])
    return (
        <>
            <NavbarMember />  
            <Home />
            <SupportMember />
            <div data-aos='fade-up' data-aos-duration='2000' className="kotak">
                <div className="box-stock">
                    <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                    <h4>Name food</h4>
                    <p>Location: <b> Store</b> </p>
                    <Link
                        className="btn-food"
                        to="/detailfood"
                    >
                        More
                    </Link>
                </div>
            </div>
            <div data-aos='fade-up' data-aos-duration='2000' className="kotak">
                <div className="box-stock">
                    <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                    <h4>Name food</h4>
                    <p>Location: <b> Store</b> </p>
                    <Link
                        className="btn-food"
                        to=""
                    >
                        More
                    </Link>
                </div>
            </div>
            <div data-aos='fade-up' data-aos-duration='2000' className="kotak">
                <div className="box-stock">
                    <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                    <h4>Name food</h4>
                    <p>Location: <b> Store</b> </p>
                    <Link
                        className="btn-food"
                        to=""
                    >
                        More
                    </Link>
                </div>
            </div>
            <div data-aos='fade-up' data-aos-duration='2000' className="kotak">
                <div className="box-stock">
                    <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                    <h4>Name food</h4>
                    <p>Location: <b> Store</b> </p>
                    <Link
                        className="btn-food"
                        to=""
                    >
                        More
                    </Link>
                </div>
            </div>
            <div data-aos='fade-up' data-aos-duration='2000' className="kotak">
                <div className="box-stock">
                    <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                    <h4>Name food</h4>
                    <p>Location: <b> Store</b> </p>
                    <Link
                        className="btn-food"
                        to=""
                    >
                        More
                    </Link>
                </div>
            </div>
            <div data-aos='fade-up' data-aos-duration='2000' className="kotak">
                <div className="box-stock">
                    <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                    <h4>Name food</h4>
                    <p>Location: <b> Store</b> </p>
                    <Link
                        className="btn-food"
                        to=""
                    >
                        More
                    </Link>
                </div>
            </div>
            <div data-aos='fade-up' data-aos-duration='2000' className="kotak">
                <div className="box-stock">
                    <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                    <h4>Name food</h4>
                    <p>Location: <b> Store</b> </p>
                    <Link
                        className="btn-food"
                        to=""
                    >
                        More
                    </Link>
                </div>
            </div>
            
            <Subscribe />
            <Footer />

        </>

    )
}
export default MemberHomePage;