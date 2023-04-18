import { FaSearch } from "react-icons/fa"
const SearchComp = () => {
  return(
    <>
      <div className='member mb-4'>
				<div className='container bg-light border rounded'>
					<div className='row'>
						<div className='col-sm-6'>
							<h2 className='m-1'>Search food</h2>
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
              <h6 className="m-0 p-2">Various kinds of food</h6>
            </div>
            <div className="col">
              <h6 className="bg-white m-0 rounded text-center p-2" style={{width: '125px'}}>Food</h6>
            </div>
            <div className="col">
              <h6 className="bg-white m-0 rounded text-center p-2" style={{width: '125px'}}>Drink</h6>
            </div>
            <div className="col">
              <h6 className="bg-white m-0 rounded text-center p-2" style={{width: '125px'}}>Snacks</h6>
            </div>
          </div>

				</div>
			</div>
    </>
  )
}

export default SearchComp