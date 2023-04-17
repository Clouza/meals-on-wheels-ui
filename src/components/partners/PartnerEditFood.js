import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/partner/partnerAddFood.css'
import '../../css/landing.css'
import { useLocation, useNavigate } from 'react-router-dom';
import Service from '../../service/Service';
import { useState } from 'react';
const PartnerEditFood = () => {
	const location = useLocation();
  const meal = location.state.foodDetail;
  const [name, setName] = useState(meal.name);
  const [stock, setStock] = useState(meal.stock);
  const [description, setDescription] = useState(meal.description);
  const [image, setImage] = useState(meal.picture);
	const navigate = useNavigate();
	const handleSubmit = async (event) => {
    event.preventDefault();
		
		const partnerId =  (await Service.getPartnerByMealsId(meal.mealId)).data.partnerId
    meal.name = name;
		meal.stock = stock;
		meal.description = description;
		meal.picture = partnerId+"-"+image.name.replace(/[^a-zA-Z0-9.-]/g, '');
		await Service.AdminUpdateFood(meal).then(()=>alert("successfuly update profile"))
		const imageData = new FormData();
		imageData.append('file', image);
    imageData.append('userID',partnerId);
		console.log(partnerId)
    await Service.uploadImage(imageData,"MEALS");
		Service.getUser().then(res=>{
      res.data.role="ADMIN"?navigate("/admin"):navigate("/partnerFoodList")
    })
  }
  return(
		<>
		<div className='container partnerAddFood '>
			<div className="row cardForm">
				<div className="col-sm-12 col-lg-6 mb-4  text-center">
					<img className='img-fluid' src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
						style={{height: '100%', borderRadius: '10px'}}></img>
				</div>
				<div className="col-sm-12 col-lg-6 mb-4">
						<form className='container' onSubmit={handleSubmit}>
              <h2>Edit Food</h2>
              <div className='row mb-4'>
                <div className='col-sm-12 col-xl-6 mb-4'>
                  <label className='form-label'>Food Name</label>
                  <input className='form-control' type='text' value={name} onChange={(event) => setName(event.target.value)} required/>
                </div>
                <div className='col-sm-12 col-xl-6 '>
                  <label className='form-label'>Stock</label>
                  <input className='form-control' type='text' value={stock} onChange={(event) => setStock(event.target.value)} required/>
                </div>
              </div>
              <div className='mb-4'>
                <label className='form-label'>Description</label>
                <textarea rows="4" placeholder="Enter your comments" className='form-control' value={description} onChange={(event) => setDescription(event.target.value)} required></textarea>
              </div>
              <div className='mb-4'>
                <label className='form-label'>Upload Image</label>
                <input className='form-control' type='file' onChange={(event) => setImage(event.target.files[0])} accept="image/*" />
              </div> 
              <button className='btn btn-primary'>Save Changes</button>
            </form>
				</div>
				</div>
			</div>
		</>
	)
}

export default PartnerEditFood