import { render } from "@testing-library/react";
import Footer from "../../components/footer/Footer";
import MemberProfile from "../../components/member/MemberProfile";
import NavbarMember from "../../components/navbar/NavbarMember";


const MemberProfilePage = () => {
  return(
		<>
			<NavbarMember/>
			<MemberProfile/>
			<Footer/>
		</>
	)
}

export default MemberProfilePage;