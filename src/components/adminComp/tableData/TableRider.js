import React,{useState,useEffect} from 'react';
import Service from '../../../service/Service';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useNavigate } from 'react-router-dom';

export const TableRider = () => {
  const styles = {
    padding: '0rem 0.5rem',
    marginLeft: '1rem'
  };
  const color = {
    color: 'blue'
  }
  const [notApprovedUsers, setNotApprovedUsers] = useState([]);
  const [approvedUsers, setApprovedUsers] = useState([]);
  const navigate = useNavigate();
  
  const fetchData = async () => {
    try {
      {/* Change the Service.getRiders() depends on what table it is. ex : table member = Service.getMembers() */}
      {/* Delete this comment if u already change it or read this. there is another not in the bottom please take a look */}
      const [approved, notApproved] = await Promise.all([
        Service.getRiders( true ),
        Service.getRiders( false )
      ]);
      setApprovedUsers(approved.data);
      setNotApprovedUsers(notApproved.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleApprove = async (id, role) => {
    try {
      const data = { id, type: role };
      await Service.approveUser(data);
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await Service.deleteUser(id);
      fetchData();
    } catch (error) {
      console.error(error);
    }
  }

  const handleEdit = async (user) =>{
    try {
      navigate('/memberupdateprofile', { state: { userDetail: user } });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h2>Rider Side</h2>
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
                <th>Email</th>
                <th>Age</th>
                <th>Phone Number</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {approvedUsers.map((au, index) => (
              <tr key={index}>
                <td>{au.userDetails.name}</td>
                <td>{au.email}</td>
                <td>{au.userDetails.age}</td>
                <td>{au.userDetails.phoneNumber}</td>
                <td>{au.userDetails.address}</td>
                <td>
                  <button style={styles} className='btn btn-success'
                  onClick={() => handleEdit(au)}>Edit</button>
                  <button style={styles} className='btn btn-danger' 
                  onClick={() => handleDelete(au.userId)}>Delete</button>
                </td>
              </tr>
            ))}
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
                <th>Vehicle Name</th>
                <th>Driving License</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {notApprovedUsers.map((nau, index) => (
              <tr key={index}>
                <td>{nau.username}</td>
                <td>{nau.email}</td>
                <td>{nau.riders.vehicle}</td>
                <td>{nau.riders.drivingLicense}</td>
                <td>
                  {/* Change the nau.riderId depends on what table it is. ex : table member = nau.memberId */}
                  {/* Delete this comment if u already change it or read this */}
                  <button style={styles} className='btn btn-success' 
                  onClick={() => handleApprove(nau.riders.riderId, nau.role.toLowerCase())}>
                    Approve
                  </button>
                  <button style={styles} className='btn btn-danger' 
                  onClick={() => handleDelete(nau.userId)}>Ignore</button>
                </td>
              </tr>
            ))}
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
