import { useEffect, useState } from 'react';
import logo from '../../assets/logo.png';
import { GiCancel } from 'react-icons/gi';
import { MdOutlineRememberMe } from 'react-icons/md';
import { IoMdAddCircle } from 'react-icons/io';
import { FaPeopleCarry, FaDonate, FaMotorcycle } from 'react-icons/fa';
import { AiOutlineLogout } from 'react-icons/ai';
import '../../css/admin.css';
import { TableFood } from './tableData/TableFood';
import { TableMember } from './tableData/TableMember';
import { TableRider } from './tableData/TableRider';
import { TablePartner } from './tableData/TablePartner';
import { TableDonator } from './tableData/TableDonator';

export const AdminDashboard = () => {
  const [activeLink, setActiveLink] = useState('food');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  const styles = {
    padding: '0rem 0.5rem',
    marginLeft: '1rem'
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
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        sideMenu.style.display = 'none';
      });
    }

    return () => {
      if (menuBtn) {
        menuBtn.removeEventListener('click', () => {
          sideMenu.style.display = 'block';
        });
      }
      if (closeBtn) {
        closeBtn.addEventListener('click', () => {
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
            <a className={activeLink === 'food' ? 'active' : ''} onClick={() => handleLinkClick('food')}><span className="material-icon"><IoMdAddCircle /></span>
              <span className='fw-bold'>Food</span>
            </a>
            <a className={activeLink === 'member' ? 'active' : ''} onClick={() => handleLinkClick('member')}><span className="material-icon"><MdOutlineRememberMe /></span>
              <span className='fw-bold'>Member</span>
            </a>
            <a className={activeLink === 'rider' ? 'active' : ''} onClick={() => handleLinkClick('rider')}><span className="material-icon"><FaMotorcycle /></span>
              <span className='fw-bold'>Rider</span>
            </a>
            <a className={activeLink === 'partner' ? 'active' : ''} onClick={() => handleLinkClick('partner')}><span className="material-icon"><FaPeopleCarry /></span>
              <span className='fw-bold'>Partner</span>
            </a>
            <a className={activeLink === 'donator' ? 'active' : ''} onClick={() => handleLinkClick('donator')}><span className="material-icon"><FaDonate /></span>
              <span className='fw-bold'>Donator</span>
            </a>
            <a href=""><span className="material-icon"><AiOutlineLogout /></span>
              <span className='fw-bold'>Log out</span>
            </a>
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



          {/* ====================SEARCH START=================================== */}
          <div className="search">
            <input type="text" className="searchTerm" placeholder="What are you looking for?" />
            <button type="submit" className="searchButton">
              <AiOutlineLogout />
            </button>
          </div>
          {/* ====================SEARCH END=================================== */}


          {/* ==========================DATA TABLE START=========================== */}
          <div className="recent-list">

            {/* =====================IF THE FOOD ACTIVE START */}
            {activeLink === 'food' && (
              <div>
                <TableFood />
              </div>
            )}
            {/* =====================IF THE FOOD ACTIVE END */}




            {/* =====================IF THE MEMBER ACTIVE START*/}
            {activeLink === 'member' && (
              <div>
                <TableMember />
              </div>
            )}
            {/* =====================IF THE MEMBER ACTIVE END */}




            {/* =====================IF THE RIDER ACTIVE START*/}
            {activeLink === 'rider' && (
              <div>
                <TableRider name={activeLink.charAt(0).toUpperCase() + activeLink.slice(1)}/>
              </div>
            )}
            {/* =====================IF THE RIDER ACTIVE END */}




            {/* =====================IF THE PARTNER ACTIVE START*/}
            {activeLink === 'partner' && (
              <div>
                <TablePartner/>
              </div>
            )}
            {/* =====================IF THE PARTNER ACTIVE END */}




            {/* =====================IF THE DONATOR ACTIVE START*/}
            {activeLink === 'donator' && (
              <div>
                <TableDonator/>
              </div>
            )}
            {/* =====================IF THE DONATOR ACTIVE END */}










          </div>
        </div>
        {/* ========================TABLE END========================= */}

        {/* Modal - Evidence member*/}
        <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Evidence Member</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <img src='https://i.ytimg.com/vi/j67xxFBXRU8/maxresdefault.jpg' />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal-Driving licensi */}
        <div className="modal fade" id="ModalRider" aria-labelledby="ModalRiderLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="ModalRiderLabel">Driving licensi</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <img src='https://asset.kompas.com/crops/oQgoro0xO8hmuxMp-rTvGTD20to=/0x75:1280x929/750x500/data/photo/2021/09/01/612e627c91f83.jpg' />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>




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
                <img src="https://images.unsplash.com/photo-1621707854626-ffa306e32745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" />
              </div>
            </div>
          </div>

          {/* End of top */}

          <div className="recent-updates">
            <h2>Recents Updates</h2>
            <div className="updates">
              <div className="update">
                <div className="profile-photo">
                  <img src="https://images.unsplash.com/photo-1566761284295-af58908238bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80" />
                </div>
                <div className="message">
                  <p><b>Jordan</b> received his order from rider</p>
                  <small className="text-muted">3 minutes ago</small>
                </div>
              </div>
              <div className="update">
                <div className="profile-photo">
                  <img src="https://images.unsplash.com/photo-1566761284295-af58908238bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80" />
                </div>
                <div className="message">
                  <p><b>Lesti Kejora</b> received his order from rider</p>
                  <small className="text-muted">3 minutes ago</small>
                </div>
              </div>
              <div className="update">
                <div className="profile-photo">
                  <img src="https://images.unsplash.com/photo-1566761284295-af58908238bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80" />
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
