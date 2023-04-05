import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/partnerAddFood.css'
import '../../css/landing.css'
const PartnerAddFood = () => {
  return(
		<>
			<div className='container partnerAddFood '>
			<div className="row cardForm">
				<div className="col-sm-12 col-lg-6 mb-4  text-center">
					<img className='img-fluid' src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
						style={{height: '100%', borderRadius: '10px'}}></img>
				</div>
				<div className="col-sm-12 col-lg-6 mb-4">
					<form className='container'>
					<h2>Add Food</h2>
						<div className='row mb-4'>
							<div className='col-sm-12 col-xl-6 mb-4'>
								<label className='form-label'>Food Name</label>
								<input className='form-control' type='text' required/>
							</div>
							<div className='col-sm-12 col-xl-6 '>
								<label className='form-label'>Stock</label>
								<input className='form-control' type='text' required/>
							</div>
						</div>
						<div className='mb-4'>
								<label className='form-label'>Description</label>
								<textarea rows="4" placeholder="Enter your comments" className='form-control' required></textarea>
						</div>
						<div className='mb-4'>
							<label className='form-label'>Upload Impage</label>
							<input className='form-control' type='file'></input>
						</div> 
						<button className='btn btn-primary'>Add Food</button>
					</form>
				</div>
			</div>
			</div>
		</>
	)
}

export default PartnerAddFood