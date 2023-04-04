import Footer from "../components/footer/Footer"
import NavbarMember from "../components/navbar/NavbarMember"
import Subscribe from "../components/subscribe/Subscribe"
import DonorTy from "../components/thankyou/DonorTy"

const DonorTyPage = () => {
	return(
		<>	
			<NavbarMember/>
			<DonorTy/>
			<Subscribe/>
			<Footer/>
		</>
	)
}
export default DonorTyPage