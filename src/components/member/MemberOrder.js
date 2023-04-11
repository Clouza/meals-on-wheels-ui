import '../../css/partner/partner.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import MemberFoodCard from './MemberFoodCard';



const MemberOrder = () => {
  const [activeTab, setActiveTab] = useState("currentOrder");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className='partner container mb-4'>
      {/* Tabs navs */}
      <ul className="nav nav-tabs mb-3" id="ex1" role="tablist">
        <li className="nav-item" role="presentation">
          <a
            className={activeTab === "currentOrder" ? "nav-link active" : "nav-link"}
            id="currentOrder"
            data-mdb-toggle="tab"
            href="#currentOrder"
            role="tab"
            aria-controls="currentOrder"
            aria-selected={activeTab === "currentOrder"}
            onClick={() => handleTabClick("currentOrder")}
          >
            Current Order
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className={activeTab === "history" ? "nav-link active" : "nav-link"}
            id="history"
            data-mdb-toggle="tab"
            href="#history"
            role="tab"
            aria-controls="history"
            aria-selected={activeTab === "history"}
            onClick={() => handleTabClick("history")}
          >
            History
          </a>
        </li>
      </ul>
      {/* Tabs navs */}

      {/* Tabs content */}
      <div className="tab-content" id="currentOrder">
        <div
          className={
            activeTab === "currentOrder"
              ? "tab-pane fade show active"
              : "tab-pane fade"
          }
          id="currentOrder"
          role="tabpanel"
          aria-labelledby="ex1-tab-1"
        >
          <MemberFoodCard/>
        </div>
        <div
          className={
            activeTab === "history"
              ? "tab-pane fade show active"
              : "tab-pane fade"
          }
          id="history"
          role="tabpanel"
          aria-labelledby="history"
        >
          <MemberFoodCard/>
        </div>
      </div>
      {/* Tabs content */}
      </div>
    </>
  );
}
 

export default MemberOrder