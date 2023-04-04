
const ProductCard = () => {
  return(
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
										</p>
									</div>
									<div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
										<div className="d-flex flex-column mt-4">
											<button className="btn btn-primary btn-sm" type="button">
												Edit
											</button>
											<button className="btn btn-warning btn-sm mt-2" type="button">
												Delete
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default ProductCard