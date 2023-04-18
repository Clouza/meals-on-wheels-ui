import { render } from "@testing-library/react";
import Footer from "../../components/footer/Footer";
import Profile from "../../components/member/Profile";
import NavbarMember from "../../components/navbar/NavbarMember";


const MemberProfilePage = () => {
  return(
		<>
			<NavbarMember/>
			<Profile/>
			<Footer/>
		</>
	)
}

export default MemberProfilePage;