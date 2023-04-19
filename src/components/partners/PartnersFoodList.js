import '../../css/partner/partner.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import PartnerSearchInventory from './PartnerSearchInventory';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import Service from '../../service/Service';



const PartnersFoodList = () => {
	const[user,setUser] = useState()
	useEffect(()=>{
		Service.getUser().then(res=>{setUser(res.data)})
	})
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
							<th scope="col">STATUS</th>
							<th scope="col">CREATE DATE</th>
							<th scope="col">ACTIONS</th>
						</tr>
					</thead>
					<tbody>
					{user?user.partners.postedMeals.map((meal) => (
						<tr key={meal.id}>
							<td>{meal.name}</td>
							<td>{meal.rating}</td>
							<td>{meal.stock}</td>
							<td>{meal.status}</td>
							<td>{meal.createdAt}</td>
							<td>
								<Link to={"/partnerEditFood"}>
									<button className='btn btn-primary mx-2 mb-1'>Update</button>
								</Link>
								<button className='btn btn-warning mx-2 mb-1'>Remove</button>
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


