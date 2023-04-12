import React,{useState,useEffect} from 'react';
import Service from '../../../service/Service';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

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

  useEffect(() => {
    Service.getNotApprovedRider()
      .then(response => setNotApprovedUsers(response.data))
      .catch(error => console.log(error));
    Service.getApprovedRider()
      .then(response => setApprovedUsers(response.data))
      .catch(error => console.log(error));
  }, []);

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
                <th>Age</th>
                <th>Phone Number</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {approvedUsers.map((au, index) => (
              <tr key={index}>
                <td>{au.user.userDetails.name}</td>
                <td>{au.user.userDetails.age}</td>
                <td>{au.user.userDetails.phoneNumber}</td>
                <td>{au.user.userDetails.address}</td>
                <td>
                  <button style={styles} className='btn btn-success'>Edit</button>
                  <button style={styles} className='btn btn-danger'>Update</button>
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
                <td>{nau.user.username}</td>
                <td>{nau.user.email}</td>
                <td>{nau.vehicle}</td>
                <td>{nau.drivingLicense}</td>
                <td>
                  <button style={styles} className='btn btn-success'>Approve</button>
                  <button style={styles} className='btn btn-danger'>Ignore</button>
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
