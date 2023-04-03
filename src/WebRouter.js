import { Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import DonorPage from './Pages/DonorPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>}></Route>
      <Route path="/donate" element={<DonorPage/>}></Route>
    </Routes>
  );
}

export default App;
