import { useEffect } from 'react';
import logo from '../../assets/logo.png';
import { GiCancel } from 'react-icons/gi';
import { MdOutlineRememberMe } from 'react-icons/md';
import { IoMdAddCircle } from 'react-icons/io';
import { FaPeopleCarry, FaDonate, FaMotorcycle } from 'react-icons/fa';
import { AiOutlineLogout } from 'react-icons/ai';
import {  useNavigate } from 'react-router-dom';
import '../../css/admin.css';

const NavbarAdmin = () => {
  const styles = {
    padding: '0rem 0.5rem',
    marginLeft : '1rem'
  };
  const navigate = useNavigate();
  const logoutHandler = () => {
    alert("jalan")
    sessionStorage.removeItem('token');
    navigate("/login");
  };
  useEffect(() => {
    const sideMenu = document.querySelector("aside");
    const menuBtn = document.querySelector("#menu-btn");
    const closeBtn = document.querySelector("#close-btn");
  
    if (menuBtn) {
      menuBtn.addEventListener('click', () => {
        sideMenu.style.display = 'block';
      });
    }
    if(closeBtn){
      closeBtn.addEventListener('click', () =>{
        sideMenu.style.display = 'none';
      });
    }
  
    return () => {
      if (menuBtn) {
        menuBtn.removeEventListener('click', () => {
          sideMenu.style.display = 'block';
        });
      }
      if(closeBtn){
        closeBtn.addEventListener('click', () =>{
          sideMenu.style.display = 'none';
        });
      }
    };
  }, []);
  
  return (
    <div className="adminbody">
      <div className="containerAdmin">


        {/* ==========================NAVIGATION BAR START=========================== */}
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
            <a href="" className="active"><span className="material-icon"><IoMdAddCircle /></span>
              <h3>Food</h3>
            </a>
            <a href=""><span className="material-icon"><MdOutlineRememberMe /></span>
              <h3>Member</h3>
            </a>
            <a href=""><span className="material-icon"><FaMotorcycle /></span>
              <h3>Rider</h3>
            </a>
            <a href=""><span className="material-icon"><FaPeopleCarry /></span>
              <h3>Partner</h3>
            </a>
            <a href=""><span className="material-icon"><FaDonate /></span>
              <h3>Donator</h3>
            </a>
            <button onClick={logoutHandler}><span className="material-icon"><AiOutlineLogout /></span>
              <h3>Log out</h3>
            </button>
          </div>
        </aside>

        {/* ==========================NAVIGATION BAR END=========================== */}



        <div className="main">
          {/* ==========================INFO TOP START=========================== */}
          <div className="insights">
            <div className="sales">
              <span className="material-icon"><AiOutlineLogout /></span>
              <div className="middle">
                <div className="left">
                  <h3>Total Partner</h3>
                  <h1>234</h1>
                </div>
                <div className="progress">
                  <svg>
                    <circle cx="38" cy="38" r="36"></circle>
                  </svg>
                  <div className="number">
                    <p>90%</p>
                  </div>
                </div>
              </div>
              <small className="text-muted">Last 24 hour</small>
            </div>

            {/* ---------END OF SALES---------- */}
            <div className="sales">
              <span className="material-icon"><AiOutlineLogout /></span>
              <div className="middle">
                <div className="left">
                  <h3>Total Partner</h3>
                  <h1>234</h1>
                </div>
                <div className="progress">
                  <svg>
                    <circle cx="38" cy="38" r="36"></circle>
                  </svg>
                  <div className="number">
                    <p>90%</p>
                  </div>
                </div>
              </div>
              <small className="text-muted">Last 24 hour</small>
            </div>

            {/* ---------END OF SALES---------- */}
            <div className="sales">
              <span className="material-icon"><AiOutlineLogout /></span>
              <div className="middle">
                <div className="left">
                  <h3>Total Partner</h3>
                  <h1>234</h1>
                </div>
                <div className="progress">
                  <svg>
                    <circle cx="38" cy="38" r="36"></circle>
                  </svg>
                  <div className="number">
                    <p>90%</p>
                  </div>
                </div>
              </div>
              <small className="text-muted">Last 24 hour</small>
            </div>

            {/* ---------END OF SALES---------- */}
          </div>

          {/* ==========================INFO TOP END=========================== */}


        
        
          {/* ========================TABLE START========================= */}
          {/* Search */}
          <div className="search">
            <input type="text" className="searchTerm" placeholder="What are you looking for?" />
            <button type="submit" className="searchButton">
              <AiOutlineLogout />
            </button>
          </div>
          {/* end search */}

          <div className="recent-list">
            <h2>List of foods</h2>
            <table>
              <thead>
                <tr>
                  <th>Name food</th>
                  <th>Description</th>
                  <th>Stock</th>
                  <th>Partner</th>
                  <th>Option</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Semur jengkol</td>
                  <td>Semur jengkol</td>
                  <td>Semur jengkol</td>
                  <td>Semur jengkol</td>
                  <td>
                    <button style={styles} className='btn btn-success'>Approve</button>
                    <button style={styles} className='btn btn-primary'>Edit</button>
                    <button style={styles} className='btn btn-danger'>Remove</button>
                  </td>
                </tr>
                <tr>
                  <td>Semur jengkol</td>
                  <td>Semur jengkol</td>
                  <td>Semur jengkol</td>
                  <td>Semur jengkol</td>
                  <td>
                    <button style={styles} className='btn btn-success'>Approve</button>
                    <button style={styles} className='btn btn-primary'>Edit</button>
                    <button style={styles} className='btn btn-danger'>Remove</button>
                  </td>
                </tr>
                <tr>
                  <td>Semur jengkol</td>
                  <td>Semur jengkol</td>
                  <td>Semur jengkol</td>
                  <td>Semur jengkol</td>
                  <td>
                    <button style={styles} className='btn btn-success'>Approve</button>
                    <button style={styles} className='btn btn-primary'>Edit</button>
                    <button style={styles} className='btn btn-danger'>Remove</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* ========================TABLE END========================= */}
      



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
      </div>
    </div>
  )
}

export default NavbarAdmin;