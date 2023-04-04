import { Route, Routes } from 'react-router-dom';

import DonorPage from './pages/DonorPage';
import LandingPage from './pages/LandingPage';
import DonorTyPage from './pages/DonorTyPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>}></Route>
      <Route path="/donate" element={<DonorPage/>}></Route>
      <Route path="/donateTy" element={<DonorTyPage/>}></Route>
    </Routes>
  );
}

export default App;
