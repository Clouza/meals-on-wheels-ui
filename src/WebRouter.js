import { Route, Routes } from 'react-router-dom';

import DonorPage from './pages/DonorPage';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>}></Route>
      <Route path="/donate" element={<DonorPage/>}></Route>
    </Routes>
  );
}

export default App;
