import { Route, Routes } from 'react-router-dom';

import DonorPage from './pages/DonorPage';
import LandingPage from './pages/LandingPage';
import DonorTyPage from './pages/DonorTyPage';
import PartnersFoodListPage from './pages/ParnersFoodListPage';

;

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>}></Route>
      <Route path="/donate" element={<DonorPage/>}></Route>
      <Route path="/donateTy" element={<DonorTyPage/>}></Route>
      <Route path="/partner" element={<PartnersFoodListPage/>}></Route>
    </Routes>
  );
}

export default App;
