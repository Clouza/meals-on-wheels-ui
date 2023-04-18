import { useState } from "react";
import { FaSearch } from "react-icons/fa"
import Service from "../../service/Service";
const SearchComp = () => {

  const [foods, setFoods] = useState([]);

  const searchFood = (value) => {

    if (value.target.value == "") {
      setFoods([]);
      return;
    }

    Service.searchFoods(value.target.value)
      .then(res => {
        setFoods(res.data);
      })
      .catch(err => console.error(err));
  }

  return (
    <>
      <div className='member mb-4'>
        <div className='container bg-light border rounded'>
          <div className='row'>
            <div className='col-sm-6'>
              <h2 className='m-1'>Search food</h2>
            </div>
          </div>

          <form className="container-fluid container p-0 mb-4">
            <input type='search' className='form-control rounded mb-2' placeholder='Search any food' aria-label='search' aria-describedby='search-addon' onKeyUp={(v) => searchFood(v)} />
            <small className="mx-1">Type anything to continue</small>
          </form>

          <div className="container-fluid mb-4 radios-0 rounded row p-3" style={{ backgroundColor: '#D3D3D4' }}>
            <div className="col">
              <h6 className="m-0 p-2">Various kinds of food</h6>
            </div>
            <div className="col">
              <h6 className="bg-white m-0 rounded text-center p-2" style={{ width: '125px' }}>Food</h6>
            </div>
            <div className="col">
              <h6 className="bg-white m-0 rounded text-center p-2" style={{ width: '125px' }}>Drink</h6>
            </div>
            <div className="col">
              <h6 className="bg-white m-0 rounded text-center p-2" style={{ width: '125px' }}>Snacks</h6>
            </div>
          </div>

          {foods.length != 0
            ? foods.map(food => {
              return (
                <div className="grid grid-cols-5 bg-white shadow-sm rounded-xl mb-3">
                  <img src="" alt={`${food.name} image`} className="border h-full rounded-xl" />
                  <div className="col-span-4 mx-4 py-4">
                    <h2 className="m-0"><a href="" className="hover:underline">{food.name}</a></h2>
                    <span className="cursor-default">Stock: {food.stock}</span>
                  </div>
                </div>
              )
            })
            : ""
          }

        </div>
      </div>
    </>
  )
}
export default SearchComp;