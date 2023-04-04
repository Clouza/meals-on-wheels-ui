import DonorForm from "../components/donor/DonorForm";
import Footer from "../components/footer/Footer";
import NavbarMember from "../components/navbar/NavbarMember";

const DonorPage = () => {
	return(
		<>      
			<NavbarMember/>  
			<DonorForm/> 
			<Footer/>      
		</>
	)
}

export default DonorPage;