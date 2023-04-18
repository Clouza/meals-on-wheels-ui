import Footer from "../../components/footer/Footer"
// import UpdateProfile from "../../components/member/UpdateProfile"
import NavbarMember from "../../components/navbar/NavbarMember"
import { useLocation,useNavigate } from 'react-router-dom';
import Service from "../../service/Service";
import {useState} from 'react'

const UpdateProfilePage = () => {
  // get data from form pervious input
  const location = useLocation();
  const user = location.state.userDetail;
  const [name, setName] = useState(user.userDetails.name);
  const [age, setAge] = useState(user.userDetails.age);
  const [address, setAddress] = useState(user.userDetails.address);
  const [phoneNumber, setPhoneNumber] = useState(user.userDetails.phoneNumber);
  const[image,setImage]= useState(user.userDetails.picture)
  const navigate = useNavigate();
  // update the user data object with the new values on form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedUser = {
      name,
      age,
      username:user.username,
      phoneNumber,
      age,
      address,
      picture:image.name

    };
    Service.updateUser(updatedUser).then(()=>alert("successfuly update profile"))
    const imageData = new FormData();
    imageData.append('file', image);
    imageData.append('userID', user.userDetails.userDetailsId);
    Service.uploadImage(imageData,"USER")
    Service.getUser().then(res=>{
      res.data.role="ADMIN"?navigate("/admin"):navigate("/profile")
    })
  };

  return(
    <>
      <NavbarMember/>
      <div className='profile'>
      <img className='img-fluid' src='https://images.unsplash.com/photo-1608408843596-b3119736057c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1734&q=80'
        style={{maxHeight: '280px'}}
      />
      <div className='profile_picture'>
          <img className='rounded-circle img-fluid mb-4'
            src={"http://localhost:8080/get-image/USER/"+user.userDetails.userDetailsId+"-"+user.userDetails.picture}
            style={{maxWidth:'200px'}}
          />
        <div className='row mb-4'>
          <div  className='col-sm-4 col-lg-3 mb-4'>
            <p className='m-0'>Name: <span className='text-muted'>{user.userDetails.name}</span></p>
            <p className='m-0'>Email: <span className='text-muted'>{user.email}</span></p>
            <p className='m-0'>Age: <span className='text-muted'>{user.userDetails.age}</span></p>
            <p className='m-0'>Address: <span className='text-muted'>{user.userDetails.address}</span></p>
            <p className='m-0'>Number: <span className='text-muted'>{user.userDetails.phoneNumber}</span></p>
          </div>
          <div className='row col-sm-8 col-lg-9'>
            <h2>Update Profile</h2>
            <form className='col-sm-12'>
            <input type="file" name="image" onChange={(e) => setImage(e.target.files[0])} accept="image/*" />
            <div className='row'>
              <div className='col-sm-6 mb-4'>
                <label className='form-label'>Name</label>
                <input className='form-control' type='text' defaultValue={user.userDetails.name} onChange={(event) => setName(event.target.value)} required/>
              </div>
              <div className='col-sm-6 mb-4'>
                <label className='form-label'>Age</label>
                <input className='form-control' type='text' defaultValue={user.userDetails.age} onChange={(event) => setAge(event.target.value)} required/>
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-6 mb-4'>
                <label className='form-label'>Address</label>
                <input className='form-control' type='text' defaultValue={user.userDetails.address} onChange={(event) => setAddress(event.target.value)} required/>
              </div>
              <div className='col-sm-6 mb-4'>
                <label className='form-label'>Number</label>
                <input className='form-control' type='text' defaultValue={user.userDetails.phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} required/>
              </div>
            </div>
            <button type='submit' className='btn btn-primary' onClick={handleSubmit}>Update</button>
            </form>
          </div>
        </div>
        </div>
    </div>
      <Footer/>
    </>
  )
}

export default UpdateProfilePage