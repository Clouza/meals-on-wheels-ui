import { useEffect } from 'react';
import logo from '../../assets/logo.png';
import { GiCancel } from 'react-icons/gi';
import { MdOutlineRememberMe } from 'react-icons/md';
import { IoMdAddCircle } from 'react-icons/io';
import { FaPeopleCarry, FaDonate, FaMotorcycle } from 'react-icons/fa';
import { AiOutlineLogout } from 'react-icons/ai';
import '../../css/admin.css';
export const LeftBar=()=>{
  return(
    <aside>
      <div className="top">
        <div className="logoAdmin">
          <img src={logo} />
        </div>
        <div className="close" id="close-btn">
          <GiCancel />
        </div>
      </div>
      <div className="sidebar">
        <a href="/admin" ><span className="material-icon"><IoMdAddCircle /></span>
          <h3>Food</h3>
        </a>
        <a href="/memberadmin"><span className="material-icon"><MdOutlineRememberMe /></span>
          <h3>Member</h3>
        </a>
        <a href="/rideradmin" ><span className="material-icon"><FaMotorcycle /></span>
          <h3>Rider</h3>
        </a>
        <a href="/partneradmin" ><span className="material-icon"><FaPeopleCarry /></span>
          <h3>Partner</h3>
        </a>
        <a href="/donatoradmin" className="active" ><span className="material-icon"><FaDonate /></span>
          <h3>Donator</h3>
        </a>
        <a href=""><span className="material-icon"><AiOutlineLogout /></span>
          <h3>Log out</h3>
        </a>
      </div>
    </aside>
  )
}