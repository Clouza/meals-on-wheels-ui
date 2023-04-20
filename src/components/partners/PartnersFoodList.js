import '../../css/partner/partner.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import PartnerSearchInventory from './PartnerSearchInventory';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import Service from '../../service/Service';



const PartnersFoodList = () => {
	const [user, setUser] = useState();
	const navigate = useNavigate();
	const getUserData = async () => {
		try {
			const response = await Service.getUser();
			setUser(response.data);
		} catch (error) {
			console.error(error);
			// handle error and display error message to user
		}
	}
	
	useEffect(() => {
		getUserData();
	}, []);
	
	const handleDelete = async (id) => {
		try {
			await Service.deleteFood(id);
			getUserData(); // Refresh user data
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
  return(
		<>
			<PartnerSearchInventory/>
				<div className='container p-0 text-center table-responsive'>
				<table className='table'>
					<thead>
						<tr>
							<th scope="col">NAME</th>
							<th scope="col">RATE</th>
							<th scope="col">STOCK</th>
							<th scope="col">CREATE DATE</th>
							<th scope="col">ACTIONS</th>
						</tr>
					</thead>
					<tbody>
					{user?user.partners.postedMeals.map((meal) => (
						<tr key={meal.mealId}>
							<td>{meal.name}</td>
							<td>{meal.rating}</td>
							<td>{meal.stock}</td>
							<td>{meal.createdAt}</td>
							<td>
								
								<button className='btn btn-primary mx-2 mb-1' onClick={()=>handleEdit(meal)}>Update</button>
								
								<button className='btn btn-warning mx-2 mb-1' onClick={()=>handleDelete(meal.mealId)}>Remove</button>
							</td>
						</tr>
					)):''}
					</tbody>
				</table>
			</div>
		</>
	)
}

export default PartnersFoodList


