import '../../css/partner/partner.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import PartnerSearchInventory from './PartnerSearchInventory';
import { Link } from 'react-router-dom';



const PartnersFoodList = () => {
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
						<tr>
							<td scope="row">Meals One</td>
							<td>3.4</td>
							<td>832</td>
							<td>Approved</td>
							<td>20/12/1945</td>
							<td>
								<Link to={"/partnerEditFood"}>
								<button className='btn btn-primary mx-2 mb-1'>Update</button>
								</Link>
								<button className='btn btn-warning mx-2 mb-1'>Remove</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	)
}

export default PartnersFoodList


