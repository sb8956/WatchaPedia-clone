import './App.css';
import Footer from './components/Footer';
import Movies from './pages/Movies';
import Tv from './pages/Tv';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import DetailContent from './pages/DetailContent';
import Overview from './pages/Overview';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Movies />}></Route>
        <Route path="/tv" element={<Tv />}></Route>
        <Route path="/content/:contentId" element={<DetailContent />}></Route>
        <Route path="/:contentId/overview" element={<Overview />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
