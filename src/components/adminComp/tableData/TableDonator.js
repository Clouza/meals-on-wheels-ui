import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useEffect } from 'react';
import { useState } from 'react';
import Service from '../../../service/Service';

export const TableDonator = () => {
  const [donator,setDonator]=useState([]);
  useEffect(() => {
    async function getUserData() {
      try {
        const response = await Service.getDonator();
        setDonator(response.data);
      } catch (error) {
        console.error(error);
        // handle error and display error message to user
      }
    }
    getUserData();
  }, []);
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
                {donator.map((donator) => (
             
                  <tr key={donator.donatorId}>
                    <td>{donator.name}</td>
                    <td>{donator.email}</td>
                    <td>{donator.totalDonate}</td>
                    <td>{donator.message}</td>
                
                </tr>
                ))}
              </tbody>
            </table>
    </div>
  )
}
