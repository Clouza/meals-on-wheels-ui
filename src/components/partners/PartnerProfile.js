import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/partner/partnerProfile.css';
import '../../css/landing.css'

const PartnerProfile = () => {


  return (
		<>
			<div className='profile'>
				<img className='img-fluid' src='https://images.unsplash.com/photo-1608408843596-b3119736057c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1734&q=80'
					style={{maxHeight: '280px'}}
				/>
				<div className='profile_picture'>
						<img className='rounded-circle img-fluid mb-4'
							src='https://mdbcdn.b-cdn.net/img/new/avatars/9.webp'
							style={{maxWidth:'200px'}}
						/>
					<div className='mb-4'>
						<p className='m-0'>Name: <span className='text-muted'>James Vincent Escartin </span></p>
						<p className='m-0'>Age: <span className='text-muted'>18</span></p>
						<p className='m-0'>Address: <span className='text-muted'>Cebu, Philippines </span></p>
						<p className='m-0'>Number: <span className='text-muted'>+63 2658947856</span></p>
					</div>
					<a href='/updatePartnersProfile' className='btn btn-primary'>Edit Profile</a>
				</div>
			
				<div>
				</div>
			</div>
		</>
	)
}

export default PartnerProfile 