import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../../css/ratingStar.css'
const MemberFoodCardHistory = () => {
	return (
		<>
			<div className="">
				<div className="row justify-content-center mb-3">
					<div className="col-md-12 col-xl-10">
						<div className="card shadow-0 border rounded-3">
							<div className="card-body">
								<div className="row">
									<div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
										<div className="bg-image hover-zoom ripple rounded ripple-surface">
											<img
												src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
												className="w-100"
												alt="product image"
											/>
											<a href="#!">
												<div className="hover-overlay">
													<div
														className="mask"
														style={{ backgroundColor: 'rgba(253, 253, 253, 0.15)' }}
													></div>
												</div>
											</a>
										</div>
									</div>
									<div className="col-md-6 col-lg-6 col-xl-6">
										<h5>Family Meal</h5>
										<p className="text-truncate mb-4 mb-md-0">
											Rider: <span>James</span> <br />
											Members Address: <span>Cebu, Philippines</span> <br />
											Status: <span>On the way</span>
											<button className="btn2 btn-sm my-1" type="button" data-bs-toggle="modal" data-bs-target="#rating">
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-star-fill" viewBox="0 0 16 16">
													<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
												</svg>4
											</button>
										</p>
									</div>
									<div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
										<div className="d-flex flex-column py-4">
											<svg className="my-4" xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="green" class="bi bi-check" viewBox="0 0 16 16">
												<path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
											</svg>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Modal */}
			<div className="modal fade" id="rating" tabIndex={-1} aria-labelledby="rating" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="rating">Add rating</h5>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
						</div>
						<div className="modal-body">
							<div className="center">
								<div className="stars">
									<input type="radio" id="five" name="rate" defaultValue={5} />
									<label htmlFor="five" />
									<input type="radio" id="four" name="rate" defaultValue={4} />
									<label htmlFor="four" />
									<input type="radio" id="three" name="rate" defaultValue={3} />
									<label htmlFor="three" />
									<input type="radio" id="two" name="rate" defaultValue={2} />
									<label htmlFor="two" />
									<input type="radio" id="one" name="rate" defaultValue={1} />
									<label htmlFor="one" />
									<span className="result" />
								</div>
							</div>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-primary">Post</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default MemberFoodCardHistory