import React, { useEffect,useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Service from '../../../service/Service';
import { useNavigate } from 'react-router-dom';

export const TableFood = () => {
  const styles = {
    padding: '0rem 0.5rem',
    marginLeft: '1rem'
  };
  const color = {
    color: 'blue'
  }
  const navigate = useNavigate();
  const [meals, setMeals] = useState([]);
  const fetchData = async () => {
    try {
      Service.getFoods().then(res=>{
        setMeals(res.data)
      })
    } catch (error) {
      console.log(error)
    }
  };
  useEffect(()=>{
    console.log(meals)
    fetchData();
  },[])
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
      await Service.AdminDeleteFood(id);
      fetchData();
    } catch (error) {
      console.error(error);
    }
  }

  const handleEdit = async (meal) => {
    try {
      navigate('/partnerEditFood', { state: { foodDetail: meal } });
    } catch (error) {
      console.error(error);
    }
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
                      <th>Picture</th>
                      <th>Option</th>
                    </tr>
                  </thead>
                  <tbody>
                    {meals.map((m,index)=>(
                      <tr key={index}>
                      <td>{m.name}</td>
                      <td>{m.description}</td>
                      <td>{m.stock}</td>
                      <td>{m.picture}</td>
                      <td>
                      {
                      m.approved ? <button style={styles} className='btn btn-secondary' disabled>Approve</button>
                      :
                      <button style={styles} className='btn btn-success'
                      onClick={() => handleApprove(m.mealId, "meals")}>Approve</button>
                      }
                        <button style={styles} className='btn btn-success'
                          onClick={() => handleEdit(m)}>Edit</button>
                        <button style={styles} className='btn btn-danger'
                          onClick={() => handleDelete(m.mealId)}>Delete</button>
                      </td>
                    </tr>
                    ))}
                  </tbody>
                </table>
    </div>
  )
}
