import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export const TableDonator = () => {

  return (
    <div>
      <h2>List of Donator</h2>

      <table>
              <thead>
                <tr>
                  <th>Donator Name</th>
                  <th>Email</th>
                  <th>Total Donate</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Nico Revaldo</td>
                  <td>Romakelapa@gmail.com</td>
                  <td>$4000</td>
                  <td>"Tidak mudah, tapi saya akan memaksimalkannya"</td>
                </tr>
              </tbody>
            </table>
    </div>
  )
}
