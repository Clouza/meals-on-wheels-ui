import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export const TableMember = () => {
  const styles = {
    padding: '0rem 0.5rem',
    marginLeft: '1rem'
  };
  const color = {
    color: 'blue'
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
                      <th>Age</th>
                      <th>Address</th>
                      <th>Phone Number</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Semur jengkol</td>
                      <td>60 y.o</td>
                      <td>Block 3 number 4</td>
                      <td>532244345</td>
                    </tr>
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
                    <tr>
                      <td>Syakil</td>
                      <td>Syakil@gmail.com</td>
                      <td>"I need this"</td>
                      <td style={color} data-bs-toggle="modal" data-bs-target="#exampleModal">Myevidence.jpg</td>
                      <td>
                        <button style={styles} className='btn btn-success'>Approve</button>
                        <button style={styles} className='btn btn-danger'>Remove</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            


      
    </div>
  )
}
