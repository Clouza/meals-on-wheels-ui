import { useEffect } from 'react';
import logo from '../../assets/logo.png';
import { GiCancel } from 'react-icons/gi';
import { MdOutlineRememberMe } from 'react-icons/md';
import { IoMdAddCircle } from 'react-icons/io';
import { FaPeopleCarry, FaDonate, FaMotorcycle } from 'react-icons/fa';
import { AiOutlineLogout } from 'react-icons/ai';
import '../../css/admin.css';
export const RightBar =()=>{
  return(
    <>
      {/* ===========RIIGHT TOP============== */}
      <div className="right">
          <div className="top">
            <button id="menu-btn">
              <span className="material-icon"><AiOutlineLogout /></span>
            </button>
            <div className="profileAdmin">
              <div className="infoAdmin">
                <p>hey, <b>MOW</b></p>
                <small className="text-miuted">Admin</small>
              </div>
              <div className="profile-photo">
                <img src="https://images.unsplash.com/photo-1621707854626-ffa306e32745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"/>
              </div>
            </div>
          </div>

          {/* End of top */}

          <div className="recent-updates">
            <h2>Recents Updates</h2>
            <div className="updates">
              <div className="update">
                <div className="profile-photo">
                <img src="https://images.unsplash.com/photo-1566761284295-af58908238bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80"/>
                </div>
                <div className="message">
                  <p><b>Jordan</b> received his order from rider</p>
                  <small className="text-muted">3 minutes ago</small>
                </div>
              </div>
              <div className="update">
                <div className="profile-photo">
                <img src="https://images.unsplash.com/photo-1566761284295-af58908238bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80"/>
                </div>
                <div className="message">
                  <p><b>Lesti Kejora</b> received his order from rider</p>
                  <small className="text-muted">3 minutes ago</small>
                </div>
              </div>
              <div className="update">
                <div className="profile-photo">
                <img src="https://images.unsplash.com/photo-1566761284295-af58908238bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80"/>
                </div>
                <div className="message">
                  <p><b>Lesti Kejora</b> received his order from rider</p>
                  <small className="text-muted">3 minutes ago</small>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}