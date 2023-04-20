import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/partner/partnerProfile.css';
import '../../css/landing.css'
import { useEffect,useState } from 'react';
import Service from '../../service/Service';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState();
	const picture = 
useEffect(() => {
  async function getUserData() {
    try {
      const response = await Service.getUser();
      setUser(response.data);
    } catch (error) {
      console.error(error);
      // handle error and display error message to user
    }
  }
  getUserData();
}, []);
	const editProfile =(user)=>{
		navigate("/updateprofile",{ state: { userDetail: user } })
	}
	return(
		<>
			<div className='profile'>
				<img className='img-fluid' src='https://images.unsplash.com/photo-1608408843596-b3119736057c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1734&q=80'
					style={{maxHeight: '280px'}}
				/>
				<div className='profile_picture'>
						<img className='rounded-circle img-fluid mb-4'
							src={"http://localhost:8080/get-image/USER/" + (user?user.userDetails.picture:'')}
							style={{maxWidth:'200px',height:'200px'}}
						/>
					<div className='mb-4'>
						<p className='m-0'>Name: <span className='text-muted'>{user?user.userDetails.name:''}</span></p>
						<p className='m-0'>Age: <span className='text-muted'>{user?user.userDetails.age:''}</span></p>
						<p className='m-0'>Address: <span className='text-muted'>{user?user.userDetails.address:''} </span></p>
						<p className='m-0'>Number: <span className='text-muted'>{user?user.userDetails.phoneNumber:''}</span></p>
					</div>
					<button className='btn btn-primary' onClick={()=>{editProfile(user)}}>Edit Profile</button>
				</div>
			
				<div>
				</div>
			</div>
		</>
	)
}

export default Profile;
