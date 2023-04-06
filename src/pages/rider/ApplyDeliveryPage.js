import React from "react";
import Footer from "../../components/footer/Footer";
import NavbarMember from "../../components/navbar/NavbarMember";
import Subscribe from "../../components/subscribe/Subscribe";
import BannerRider from "../../components/BannerRider/Banner";
import RiderHeadingDelivery from "../../components/support/RiderHeadingDelivery";

const ApplyDeliveryPage = () =>{
    const buttonA = {
        backgroundColor: "#DC6767"
    };

    return(
        <>
            <NavbarMember/>
            <RiderHeadingDelivery/>
            <BannerRider/>
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
										<h5>Family Meal</h5>
										<p className="text-truncate mb-4 mb-md-0">
											Rider: <span>James</span> <br />
											Members Address: <span>Cebu, Philippines</span> <br />
											Status: <span>On the way</span>
										</p>
									</div>
									<div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
										<div className="d-flex flex-column mt-4">
											<button className="btn btn-primary btn-sm" type="button">
												Complete
											</button>
											<button style={buttonA} className="btn btn-warning btn-sm mt-2" type="button">
												Cancel
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
            <Footer/>
        </>
    )
}
export default ApplyDeliveryPage;