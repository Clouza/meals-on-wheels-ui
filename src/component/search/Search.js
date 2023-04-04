import React from "react";
import '../../css/Landing.css';

const Search = () => {
    return (
        <div className="search container section">
            <div className="sectionContainer grid">

                <div className="btns flex">

                    <div className="singleBtn">
                        <span>Snack</span>
                    </div>

                    <div className="singleBtn">
                        <span>Food</span>
                    </div>

                    <div className="singleBtn">
                        <span>Drink</span>
                    </div>


                </div>

                <div className="searchInputs flex">
                    <div className="singleInput flex">
                        {/* <div className="iconDiv">
                            <BsSearch className="icon" />
                        </div> */}
                        <div className="texts">
                            <h4>Search</h4>
                            <input type="text" placeholder="Search food here" />
                        </div>

                        <buton className="btn btnBlock flex"> Search </buton>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Search;