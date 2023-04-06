import React from "react";
import '../../css/bannerRider.css';
const BannerRider = () =>{
    return(
        <>
        <header>
          <div className="content">
            <div className="cont_box">
              <h1> <br /> MOW</h1>
              <p></p>
              <div className="weather">
                <h6>90 °C <span>Biasa aja</span></h6>
              </div>
              <div className="btns_cont">
                <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="currentColor" className="bi bi-arrow-bar-left" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5ZM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5Z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="currentColor" className="bi bi-arrow-bar-right" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8Zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5Z" />
                </svg>
              </div>
            </div>
            <div className="choose_bx">
              <div className="select">
                <div className="card">
                  {/* not yet Addd content */}
                </div>
                <div className="card">
                  {/* not yet Addd content */}
                </div>
                <div className="card">
                  <div className="left_box">
                    {/* not yet Addd content */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="map">
          <div className="address_bx">
          </div>
          <iframe src="https://my.atlistmaps.com/map/a8fab323-dbe2-45f0-8787-2620d9cfcbbc?share=true"  allowfullscreen></iframe>
        </div>
        </>
    )
}
export default BannerRider;