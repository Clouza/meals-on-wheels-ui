import React, { useState, useEffect } from 'react';
import Service from '../../../service/Service';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useNavigate } from 'react-router-dom';

export const TableMember = () => {
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
      const [approved, notApproved] = await Promise.all([
        Service.getMembers( true ),
        Service.getMembers( false)
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
      navigate('/updateprofile', { state: { userDetail: user } });
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <h2>Member Side</h2>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" data-bs-toggle="tab" href="#tab1">List Members</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="tab" href="#tab2">Pending Member</a>
        </li>
      </ul>


      {/* ===================MEMBER LIST========================== */}
      <div className="tab-content">
        <div className="tab-pane fade show active" id="tab1">
          <table>
            <thead>
              <tr>
                <th>Member Name</th>
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



        {/* ============MEMBER PENDING================ */}
        <div className="tab-pane fade" id="tab2">
          <table>
            <thead>
              <tr>
                <th>Member Name</th>
                <th>Email</th>
                <th>Message</th>
                <th>Evidence</th>
                <th>Option</th>
              </tr>
            </thead>
            <tbody>
            {notApprovedUsers.map((nau, index) => (
              <tr key={index}>
                <td>{nau.username}</td>
                <td>{nau.email}</td>
                <td>{nau.members.message}</td>
                <td>{nau.members.evidence}</td>
                <td>
                  <button style={styles} className='btn btn-success' 
                  onClick={() => handleApprove(nau.members.memberId, nau.role.toLowerCase())}>
                    Approve
                  </button>
                  <button style={styles} className='btn btn-danger' 
                  onClick={() => handleDelete(nau.userId)}>Ignore</button>
                </td>
              </tr>
            ))}


              {/* <tr>
                <td>Syakil</td>
                <td>Syakil@gmail.com</td>
                <td>"I need this"</td>
                <td style={color} data-bs-toggle="modal" data-bs-target="#exampleModal">Myevidence.jpg</td>
                <td>
                  <button style={styles} className='btn btn-success'>Approve</button>
                  <button style={styles} className='btn btn-danger'>Remove</button>
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>




    </div>
  )
}
