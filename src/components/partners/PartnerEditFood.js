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
  
    try {
      const response = await Service.getUser();
      if (response.data.role === "ADMIN") {
        const partnerId = (await Service.getPartnerByMealsId(meal.mealId)).data.partnerId;
        meal.name = name;
        meal.stock = stock;
        meal.description = description;
        meal.picture = partnerId + "-" + image.name.replace(/[^a-zA-Z0-9.-]/g, '');
        await Service.AdminUpdateFood(meal);
        const imageData = new FormData();
        imageData.append('file', image);
        imageData.append('userID', partnerId);
        await Service.uploadImage(imageData, "MEALS");
        alert("successfully updated food");
        navigate("/admin");
      } else {
        meal.name = name;
        meal.stock = stock;
        meal.description = description;
        meal.picture = response.data.partners.partnerId + "-" + image.name.replace(/[^a-zA-Z0-9.-]/g, '');
        await Service.updateFood(meal);
        const imageData = new FormData();
        imageData.append('file', image);
        imageData.append('userID', response.data.partners.partnerId );
        await Service.uploadImage(imageData, "MEALS");
        alert("successfully updated food");
        navigate("/partnerhome");
      }
    } catch (error) {
      console.error(error);
      // handle error and display error message to user
    }
  }
  
  return(
		<>
		<div className='container partnerAddFood '>
			<div className="row cardForm">
				<div className="col-sm-12 col-lg-6 mb-4  text-center">
					<img className='img-fluid' src={"http://localhost:8080/get-image/Meals/"+meal.picture}
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