import '../../css/donate.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/landing.css';
import { useEffect, useState } from 'react';
import Aos from 'aos';
import Service from '../../service/Service';

const DonorForm = () => {
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [total, setTotal] = useState();
	const [comment, setComment] = useState();

	useEffect(() => {
		Aos.init({ duration: 2000 })
	})

	const bgImage = {
		backgroundImage: "url('https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9uYXRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60')",
		minHeight: '500px',
	};

	const maskStyle = {
		backgroundColor: 'rgba(255, 255, 255, 0.4)',
		height: '100%',
	};

	const maskFormStyle = {
		backgroundColor: 'rgba(255, 255, 255, 0.7)',
		height: '100%',
		borderRadius: '10px'
	};

	const donate = (e) => {
		e.preventDefault();
		Service.donate({ name, email, total, comment })
			.then(res => { window.location.href = res.data.response });
	}

	return (
		<div className="container-flex donate" data-aos='fade-up' data-aos-duration='1000'>
			<div className="bg-image background justify-content-center" style={bgImage}>
				<div className="mask py-4" style={maskStyle}>
					<div className="container mainText py-4" style={maskFormStyle}>
						<h2 data-aos='fade-up' data-aos-duration='2500'>Become a Donor</h2>

						<form className="container" onSubmit={donate}>
							<div className="row mb-3">
								<div className="col-sm-6 mb-4">
									<label className="form-label">Name</label>
									<input className="form-control" type="text" placeholder="Input your name here" required onChange={(n) => setName(n.target.value)} />
								</div>

								<div className="col-sm-6">
									<label className="form-label p-0 m-0">Accepted Payment Method</label>
									<div className="row p-0 m-0">
										<a className="col-sm-3 p-0 mt-3" href="#">
											<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png" className="m-0"></img>
										</a>
									</div>
								</div>
							</div>

							<div className="row mb-4">
								<div className="col">
									<label className="form-label">Email</label>
									<input className="form-control" type="email" placeholder="mail@example.com" required onChange={(e) => setEmail(e.target.value)} />
								</div>
								<div className="col">
									<label className="form-label">total</label>
									<input className="form-control" type="text" required onChange={(t) => setTotal(t.target.value)} />
								</div>
							</div>

							<div className='mb-4'>
								<label className="form-label">Comment</label>
								<textarea className="form-control" rows="5" placeholder="Enter your comments" onChange={(c) => setComment(c.target.value)}></textarea>
							</div>

							<button type='submit' className='btn btn-success form-control'>Donate</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}
export default DonorForm