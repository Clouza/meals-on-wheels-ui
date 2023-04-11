import { FaSearch } from "react-icons/fa"
const PartnerSearchInventory = () => {
  return(
    <>
      <div className='partner mb-4'>
				<div className='container bg-light border rounded'>
					<div className='row'>
						<div className='col-sm-6'>
							<h2 className='m-1'>Inventory</h2>
						</div>
						<div className='col-sm-6 text-end'>
							<a className='btn btn-primary text-white m-3'>+ Add Food</a>
						</div>
					</div>
          <form className="container-fluid container p-0 mb-4">
              <div className="input-group rounded">
                <input type='search' className='form-control rounded' placeholder='Search Food' aria-label='search' aria-describedby='search-addon'/>
                <span className="input-group-text border-0" id="search-addon">
                  <FaSearch/>
                </span>
              </div>
          </form>
          <div className="container-fluid mb-4 radios-0 rounded row p-3" style={{backgroundColor: '#D3D3D4'}}>
            <div className="col">
              <h6 className="m-0 p-2">Filter Applied</h6>
            </div>
            <div className="col">
              <h6 className="bg-white m-0 rounded text-center p-2" style={{width: '125px'}}> Stock: 743</h6>
            </div>
            <div className="col">
              <h6 className="bg-white m-0 rounded text-center p-2" style={{width: '125px'}}> Rate: 3.2</h6>
            </div>
          </div>

				</div>
			</div>
    </>
  )
}

export default PartnerSearchInventory