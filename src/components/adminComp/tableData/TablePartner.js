import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export const TablePartner = () => {
  const styles = {
    padding: '0rem 0.5rem',
    marginLeft: '1rem'
  };
  const color = {
    color: 'blue'
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
                    <th>Age</th>
                    <th>Phone Number</th>
                    <th>Address</th>
                    <th>Join At</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Nico</td>
                    <td>Bali,Indonesia</td>
                    <td>2384093248</td>
                    <td>18 y.o</td>
                    <td>20/2/2022</td>
                  </tr>
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
                  <tr>
                    <td>Jokowidodo</td>
                    <td>Jk2@gmail.com</td>
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
