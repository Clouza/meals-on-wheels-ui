import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DonorPage from './pages/DonorPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/donor" element={<DonorPage />}></Route>
    </Routes>
  );
}

export default App;
