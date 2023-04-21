import React, { useState, useEffect } from "react";
import '../../css/bannerRider.css';
import Service from "../../service/Service";

const BannerRider = () => {
  const [isActive, setIsActive] = useState(false);
  const [rider, setRider] = useState();
  const activeBtn = {
    backgroundColor: isActive ? "green" : "gray",
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    position: "absolute",
    cursor: 'pointer',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }
  const fetchData = async () => {
    const userData = (await Service.getUser()).data;
    const rider = userData.riders;
    setRider(rider);
    setIsActive(rider.status === "AVAILABLE");
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = async () => {
    setIsActive(!isActive);
    rider.status = isActive ? "BUSY" : "AVAILABLE";

    // Update the user profile with the new data
    await Service.updateProfile(rider);
    fetchData()
  };
  return (
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
              <div className="card" style={{ position: "relative" }}>
                <button isActive={isActive} style={activeBtn} onClick={handleClick}>
                  {isActive ? "Available" : "Busy"}
                </button>
              </div>
              <div className="card">
                {/* not yet Addd content */}
              </div>
              <div className="card">

                {isActive ? "You are Active right now, wait for the Order" : "You Will not receive any order right now because you are Busy"}

              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="map">
        <div className="address_bx">
        </div>
        <iframe src="https://my.atlistmaps.com/map/cccfad1e-a7df-45cc-b465-7654c0c034b3?share=true" allowfullscreen></iframe>
      </div>
    </>
  )
}
export default BannerRider;