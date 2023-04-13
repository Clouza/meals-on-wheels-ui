import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/partner/partnerProfile.css';
import '../../css/landing.css'

const MemberUpdateProfile = () => {
  return(
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
        <div className='row mb-4'>
          <div  className='col-sm-4 col-lg-3 mb-4'>
            <p className='m-0'>Name: <span className='text-muted'>James Vincent Escartin </span></p>
            <p className='m-0'>Age: <span className='text-muted'>18</span></p>
            <p className='m-0'>Address: <span className='text-muted'>Cebu, Philippines </span></p>
            <p className='m-0'>Number: <span className='text-muted'>+63 2658947856</span></p>
          </div>
          <div className='row col-sm-8 col-lg-9'>
            <h2>Update Profile</h2>
            <form className='col-sm-12'>
            <div className='row'>
              <div className='col-sm-6 mb-4'>
                <label className='form-label'>Name</label>
                <input className='form-control' type='text'  required/>
              </div>
              <div className='col-sm-6 mb-4'>
                <label className='form-label'>Age</label>
                <input className='form-control' type='text' required/>
              </div>
              </div>
              <div className='row'>
                <div className='col-sm-6 mb-4'>
                  <label className='form-label'>Address</label>
                  <input className='form-control' type='text' required/>
                </div>
                <div className='col-sm-6 mb-4'>
                  <label className='form-label'>Number</label>
                  <input className='form-control' type='text' required/>
                </div>
              </div>
              <button type='submit' className='btn btn-primary'>Update</button>

            </form>
          </div>
        </div>
        </div>
    </div>
  </>
  )
}

export default MemberUpdateProfile;