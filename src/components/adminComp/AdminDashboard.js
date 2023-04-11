import { useEffect,useState } from 'react';
import logo from '../../assets/logo.png';
import { GiCancel } from 'react-icons/gi';
import { MdOutlineRememberMe } from 'react-icons/md';
import { IoMdAddCircle } from 'react-icons/io';
import { FaPeopleCarry, FaDonate, FaMotorcycle } from 'react-icons/fa';
import { AiOutlineLogout } from 'react-icons/ai';
import '../../css/admin.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { LeftBar } from './LeftBar';
import { RightBar } from './RightBar';
export const AdminDashboard =() =>{
  
  const [activeLink, setActiveLink] = useState('member'); // initialize active link to "donator"

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return(
    <div className='container-fluid' style={{maxWidth:'95vw'}}>
      <div className="row">
        {/* left bar */}
        <div className='col-2'>  
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
        </div>

        {/* center */}
        <div className='col-8'>
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


            
            
            
          </div>
          <br/><br/><br/><br/>
          {/* table */}
          
        </div>

        {/* right bar */}
        <div className='col-2'> 
        <RightBar/>  
        </div>
          
      </div>
    </div>
  )
}
