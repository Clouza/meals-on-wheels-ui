import '../../css/donate.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/landing.css';
import visa from "../../assets/visa.png"

const DonorForm = () => {

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

	return (
		<div className="container-flex" >
			<div className="bg-image background justify-content-center" style={bgImage}>
				<div className="mask py-4" style={maskStyle}>
					<div className="container mainText py-4" style={maskFormStyle}>
						<h2>Become a Donor</h2>
						<form className="">
							<div className="row mb-4">
								<div className="col-sm-6">
									<label className="form-label">Name</label>
									<input className="form-control" type="text" placeholder="Input your name here" required />
								</div>
								<div className="col-sm-6">
									<label className="form-label p-0 m-0">Accepted Payment Cards</label>
									<div className="row p-0 m-0">
										<a className="col-sm-3 p-0 m-0" href="#">
											<img src={visa} className="m-0" style={{ height: '70px', width: "70px" }}></img>
										</a>
									</div>
								</div>
							</div>
							<div className="row mb-4">
								<div className="col">
									<label className="form-label">Email</label>
									<input className="form-control" type="email" placeholder="@example.com" required />
								</div>
								<div className="col">
									<label className="form-label">Date</label>
									<input className="form-control" type="date" />
								</div>
							</div>
							<div>
								<label className="form-label">Comment</label>
								<textarea className="form-control" rows="5" placeholder="Enter your comments"></textarea>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}
export default DonorForm