import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Movies from './pages/Movies';
import Tv from './pages/Tv';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Movies />}></Route>
        <Route path="/tv" element={<Tv />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
