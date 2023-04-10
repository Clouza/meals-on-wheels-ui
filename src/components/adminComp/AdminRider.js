import { useEffect } from 'react';
import logo from '../../assets/logo.png';
import { GiCancel } from 'react-icons/gi';
import { MdOutlineRememberMe } from 'react-icons/md';
import { IoMdAddCircle } from 'react-icons/io';
import { FaPeopleCarry, FaDonate, FaMotorcycle } from 'react-icons/fa';
import { AiOutlineLogout } from 'react-icons/ai';
import '../../css/admin.css';

export const AdminRider = () => {
  const styles = {
    padding: '0rem 0.5rem',
    marginLeft: '1rem'
  };

  const color ={
    color:'blue'
  }
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
            <a href="/admin" ><span className="material-icon"><IoMdAddCircle /></span>
              <h3>Food</h3>
            </a>
            <a href="/memberadmin"><span className="material-icon"><MdOutlineRememberMe /></span>
              <h3>Member</h3>
            </a>
            <a href="/rideradmin" className="active"><span className="material-icon"><FaMotorcycle /></span>
              <h3>Rider</h3>
            </a>
            <a href="/partneradmin"><span className="material-icon"><FaPeopleCarry /></span>
              <h3>Partner</h3>
            </a>
            <a href="/donatoradmin"><span className="material-icon"><FaDonate /></span>
              <h3>Donator</h3>
            </a>
            <a href=""><span className="material-icon"><AiOutlineLogout /></span>
              <h3>Log out</h3>
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
          {/* Search */}
          <div className="search">
            <input type="text" className="searchTerm" placeholder="What are you looking for?" />
            <button type="submit" className="searchButton">
              <AiOutlineLogout />
            </button>
          </div>
          {/* end search */}

          <div className="recent-list">
            <h2>Partner Side</h2>
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a className="nav-link active" data-bs-toggle="tab" href="#tab1">List Riders</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab2">Pending Riders</a>
              </li>
            </ul>


            {/* ===================PARTNER LIST========================== */}
            <div className="tab-content">
              <div className="tab-pane fade show active" id="tab1">
                <table>
                  <thead>
                    <tr>
                      <th>Rider Name</th>
                      <th>Age</th>
                      <th>Address</th>
                      <th>Phone Number</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Semur jengkol</td>
                      <td>20 y.o</td>
                      <td>Block 3 number 4</td>
                      <td>3242342342334</td>
                    </tr>
                  </tbody>
                </table>
              </div>



              {/* ============PARTNER PENDING================ */}
              <div className="tab-pane fade" id="tab2">
                <table>
                  <thead>
                    <tr>
                      <th>Rider Name</th>
                      <th>Email</th>
                      <th>Vihicle Name</th>
                      <th>Driving licensi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Jaka Sembung</td>
                      <td>sembung@gmail.com</td>
                      <td>Zx25r</td>
                      <td style={color} data-bs-toggle="modal" data-bs-target="#exampleModal">stnk.jpg</td>
                      <td>
                        <button style={styles} className='btn btn-success'>Approve</button>
                        <button style={styles} className='btn btn-danger'>Ignore</button>
                      </td>
                    </tr>
                  </tbody>
                </table>

                



              </div>
            </div>
          </div>
        </div>
        {/* ========================TABLE END========================= */}

        {/* Modal */}
        <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Driving licensi</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                      </div>
                      <div className="modal-body">
                        <img src='https://asset.kompas.com/crops/oQgoro0xO8hmuxMp-rTvGTD20to=/0x75:1280x929/750x500/data/photo/2021/09/01/612e627c91f83.jpg'/>
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
