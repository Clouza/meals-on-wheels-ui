import React, { useState, useEffect } from 'react';
import Service from '../../../service/Service';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useNavigate } from 'react-router-dom';

export const TablePartner = () => {
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
      {/* Change the Service.getRiders() depends on what table it is. ex : table member = Service.getMembers() */ }
      {/* Delete this comment if u already change it or read this. there is another not in the bottom please take a look */ }
      const [approved, notApproved] = await Promise.all([
        Service.getPartners( true ),
        Service.getPartners(false)
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

  const handleEdit = async (user) => {
    try {
      navigate('/memberupdateprofile', { state: { userDetail: user } });
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <h2>Partner Side</h2>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" data-bs-toggle="tab" href="#tab1">List Partners</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="tab" href="#tab2">Pending Partners</a>
        </li>
      </ul>


      {/* ===================PARTNER LIST========================== */}
      <div className="tab-content">
        <div className="tab-pane fade show active" id="tab1">
          <table>
            <thead>
              <tr>
                <th>Partner Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Phone Number</th>
                <th>Address</th>
                <th>Join At</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {approvedUsers.map((au, index) => (
                <tr key={index}>
                  <td>{au.user.userDetails.name}</td>
                  <td>{au.user.email}</td>
                  <td>{au.user.userDetails.age}</td>
                  <td>{au.user.userDetails.phoneNumber}</td>
                  <td>{au.user.userDetails.address}</td>
                  <td>{au.user.userDetails.createdAt}</td>
                  <td>
                    <button style={styles} className='btn btn-success'
                      onClick={() => handleEdit(au.user)}>Edit</button>
                    <button style={styles} className='btn btn-danger'
                      onClick={() => handleDelete(au.user.userId)}>Delete</button>
                  </td>
                </tr>
              ))}
              {/* <tr>
                    <td>Nico</td>
                    <td>Bali,Indonesia</td>
                    <td>2384093248</td>
                    <td>18 y.o</td>
                    <td>20/2/2022</td>
                  </tr> */}
            </tbody>
          </table>
        </div>



        {/* ============PARTNER PENDING================ */}
        <div className="tab-pane fade" id="tab2">
          <table>
            <thead>
              <tr>
                <th>Partner Name</th>
                <th>email</th>
                <th>Option</th>
              </tr>
            </thead>
            <tbody>
            {notApprovedUsers.map((nau, index) => (
              <tr key={index}>
                <td>{nau.user.username}</td>
                <td>{nau.user.email}</td>
                <td>

                  <button style={styles} className='btn btn-success' 
                  onClick={() => handleApprove(nau.partnerId, nau.user.role.toLowerCase())}>
                    Approve
                  </button>
                  <button style={styles} className='btn btn-danger' 
                  onClick={() => handleDelete(nau.user.userId)}>Ignore</button>
                </td>
              </tr>
            ))}
              {/* <tr>
                <td>Jokowidodo</td>
                <td>Jk2@gmail.com</td>
                <td>
                  <button style={styles} className='btn btn-success'>Approve</button>
                  <button style={styles} className='btn btn-danger'>Ignore</button>
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
