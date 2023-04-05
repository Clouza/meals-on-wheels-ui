import '../../css/partner/partner.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import ProductCard from './ProductCard';

const PartnersFoodList = () => {
	const [activeTab, setActiveTab] = useState(0);

	const handleTabClick = (index) => {
		setActiveTab(index);
	}
  return(
		<>
			<div className='container partner'>
				<div className='text-center'>
					<h2>Your Food Posted</h2>
				</div>
				<div>
					<ul className='nav nav-tabs mb-3' id='con1' role='tablist'>
						<li className='nav-item' role='presentation'>
							<a 
								className={`nav-link ${activeTab === 0 ? 'active' : ''}`}
								id='con1-tab-1'
								data-mdb-toggle="tab"
								href='#con1-tab-1'
								role="tab"
								aria-controls='con1-tab-1'
								aria-selected={activeTab === 0}
								onClick={() => handleTabClick(0)}
							>
								Current Food
							</a>
						</li>
					</ul>
					<div className='tab-content' id='con1-content'>
						<div
							className={`tab-pane fade show ${activeTab === 0 ? 'active' : ''}`}
							id='con1-tab-1'
							role='tabpanel1'
							aria-labelledby='con1-tab-1'
						>
							<ProductCard/>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default PartnersFoodList


