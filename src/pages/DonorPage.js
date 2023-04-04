import DonorForm from "../components/donor/DonorForm";
import Footer from "../components/footer/Footer";
import NavbarMember from "../components/navbar/NavbarMember";
import Subscribe from "../components/subscribe/Subscribe";

const DonorPage = () => {
	return(
		<>      
			<NavbarMember/>  
			<DonorForm/> 
			<Subscribe/>
			<Footer/>      
		</>
	)
}

export default DonorPage;