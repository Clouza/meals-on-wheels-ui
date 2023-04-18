import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/partner/partnerAddFood.css'
import '../../css/landing.css'
import { useState } from 'react';
import Service from '../../service/Service';
import axios from 'axios';
const PartnerAddFood = () => {
	const [formData, setFormData] = useState({
    name: '',
    stock: '',
    categoryName: '',
    description: '',
    picture: null,
    postedBy:{}
  });
  const [selectedFile, setSelectedFile] = useState(null);


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleImageChange = (event) => {
		const file = event.target.files[0];
    setFormData({
      ...formData,
			picture:file.name
    });
    setSelectedFile(file);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const user = (await Service.getUser());
      const formDataWithUser = {
        ...formData,
        postedBy: user.data.partners,
      };
      console.log(formDataWithUser)
      const imageData = new FormData();
      imageData.append('file', selectedFile);
      imageData.append('userID', user.data.partners.partnerId);
      await Service.uploadImage(imageData,"MEALS");
      

      await Service.addFood(formDataWithUser).then(res =>{alert(res.data.response)});
      setFormData({
        name: '',
        stock: '',
        categoryName: '',
        description: '',
        picture: null,
        postedBy: {},
      });
    } catch (error) {
      console.error(error)
    }
  };
	return (
		<>
			<div className='container partnerAddFood '>
				<div className="row cardForm">
					<div className="col-sm-12 col-lg-6 mb-4  text-center">
						<img className='img-fluid' src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
							style={{ height: '100%', borderRadius: '10px' }}></img>
					</div>
					<div className="col-sm-12 col-lg-6 mb-4">
						<form className='container' onSubmit={handleSubmit}>

							<h2>Add Food</h2>
							<div className='row mb-3'>
                <div className='col-sm-12 col-xl-6 '>
                  <label className='form-label'>Food Name</label>
                  <input className='form-control mb-3' type='text' required
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className='col-sm-12 col-xl-6 '>
                  <label className='form-label'>Stock</label>
                  <input className='form-control' type='text' required
                    name="stock"
                    value={formData.stock}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <label className='form-label'>Categories</label>
              <input className='form-control mb-3' type='text' required
                name="categoryName"
                value={formData.categoryName}
                onChange={handleInputChange}
              />
              <label className='form-label'>Description</label>
              <textarea rows="4" placeholder="Enter your comments" className='form-control mb-3' required
                name="description"
                value={formData.description}
                onChange={handleInputChange}
              ></textarea>

              <label className='form-label'>Upload Image</label>
              <input className='form-control mb-5' type='file' onChange={handleImageChange}></input>


							<button className='btn btn-primary' type='submit'>Add Food</button>

						</form>
					</div>
				</div>
			</div>
		</>
	)
}

export default PartnerAddFood