import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/landing.css';
import '../../css/donateTy.css'
import tyImage from '../../assets/donateThankYou.png';

const DonorTy = () => {
  return(
		<>
		<br /><br /><br />
			<div className="row container donateTy">
				<div className='col-sm-6 d-flex align-items-center'>
					<div className=''>
						<h1 style={{fontSize: '6vw'}}>THANK YOU</h1>
						<p style={{color: 'black', fontWeight:'bold'}}>Thank you for donating to us</p>
						<a href='#'>Back to sigin</a>
					</div>
				</div>
				<div className='col-sm-6 text-left'>
					<img src={tyImage} className="img-fluid text-center" style={{objectFit: 'cover'}}/>
				</div>
			</div>
			<br /><br /><br />
		</>
	)
}

export default DonorTy;