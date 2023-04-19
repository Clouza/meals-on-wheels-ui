import { Route, Routes } from 'react-router-dom';

import DonorPage from './pages/DonorPage';
import LandingPage from './pages/LandingPage';
import DonorTyPage from './pages/DonorTyPage';
import AboutUsPage from './pages/AboutusPage';
import MemberDetailFoodPage from './pages/member/MemberDetailFoodPage';
import ContactUsPage from './pages/ContactUsPage';
import TermAndConPage from './pages/TermAndConPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import RegisterRiderPage from './pages/RegisterRiderPage';
import RegisterMemberPage from './pages/RegisterMemberPage';
import MemberHomePage from './pages/member/MemberHomePage';
import MemberOrderPage from './pages/member/MemberOrderPage';
import DashboardRiderPage from './pages/rider/DashboardRiderPage';
import ApplyDeliveryPage from './pages/rider/ApplyDeliveryPage';

// default locale
import lang from './Localization';
import ParnerHomePage from './pages/partner/ParnerHomePage';
import PartnerAddFoodPage from './pages/partner/PartnerAddFoodPage';
import PartnerEditFoodPage from './pages/partner/PartnerEditFoodPage';

import UpdateProfilePage from './pages/member/UpdateProfilePage';
import ProfilePage from './pages/member/ProfilePage';
import { AdminDashboardPage } from './pages/admin/AdminDashboardPage';
import NotFound from './pages/NotFound';
import PartnerApplyOrderPage from './pages/partner/PartnerApplyOrderPage';

if (!sessionStorage.getItem("locale")) {
  sessionStorage.setItem("locale", "en");
  sessionStorage.setItem('language', 'English');
}
lang.setLanguage(sessionStorage.getItem("locale"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/donate" element={<DonorPage />}></Route>
      <Route path="/donateTy" element={<DonorTyPage />}></Route>
      <Route path="/about" element={<AboutUsPage />}></Route>
      <Route path="/contact" element={<ContactUsPage />}></Route>
      <Route path="/term" element={<TermAndConPage />}></Route>
      <Route path="/register" element={<RegisterPage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/regrider" element={<RegisterRiderPage />}></Route>
      <Route path="/regmember" element={<RegisterMemberPage />}></Route>

      <Route path="/memberorder" element={<MemberOrderPage />}></Route>
      <Route path="/member" element={<MemberHomePage />}></Route>
      <Route path="/detailfood" element={<MemberDetailFoodPage />}></Route>

      <Route path="/viewprofile" element={<ProfilePage />}></Route>
      <Route path="/updateprofile" element={<UpdateProfilePage />}></Route>

      <Route path="/rider" element={<DashboardRiderPage />}></Route>
      <Route path="/applydelivery" element={<ApplyDeliveryPage />}></Route>

      <Route path="/partnerhome" element={<ParnerHomePage />}></Route>
      <Route path="/partnerApplyOrder" element={<PartnerApplyOrderPage />}></Route>
      <Route path="/partnerAddFood" element={<PartnerAddFoodPage />}></Route>
      <Route path="/partnerEditFood" element={<PartnerEditFoodPage />}></Route>
      {/* <Route path='/partnerProfile' element={<PartnerProfilePage />}></Route>
      <Route path='/partnerUpdateProfile' element={<PartnerEditProfilePage />}></Route> */}

      <Route path='/admin' element={<AdminDashboardPage />}></Route>
      <Route path='/*' element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
