import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export const TableFood = () => {
  const styles = {
    padding: '0rem 0.5rem',
    marginLeft: '1rem'
  };
  const color = {
    color: 'blue'
  }
  return (
    <div>
      <h2>Food Side</h2>
                <table>
                  <thead>
                    <tr>
                      <th>Name food</th>
                      <th>Description</th>
                      <th>Stock</th>
                      <th>Partner</th>
                      <th>Option</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Semur jengkol</td>
                      <td>Semur jengkol</td>
                      <td>Semur jengkol</td>
                      <td>Semur jengkol</td>
                      <td>
                        <button style={styles} className='btn btn-success'>Approve</button>
                        <button style={styles} className='btn btn-primary'>Edit</button>
                        <button style={styles} className='btn btn-danger'>Remove</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
    </div>
  )
}
