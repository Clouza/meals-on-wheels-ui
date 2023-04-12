import React from 'react';
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
                <td style={color} data-bs-toggle="modal" data-bs-target="#ModalRider">stnk.jpg</td>
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
  )
}
