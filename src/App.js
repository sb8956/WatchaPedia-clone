import Footer from './components/Footer';
import Movies from './pages/Movies';
import Tv from './pages/Tv';
import Header from './components/Header';
import { Route, Routes, useLocation } from 'react-router-dom';
import DetailContent from './pages/DetailContent';
import Overview from './pages/Overview';
import Comment from './pages/Comment'
import Search from './pages/Search';

function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/tv" element={<Tv />} />
        <Route path="/contents/:contentId/detail" element={<DetailContent />} />
        <Route path="/contents/:contentId/overview" element={<Overview />} />
        <Route path="/contents/:contentId/comment" element={<Comment />} />
        <Route path="/search/:search" element={<Search />} />
      </Routes>
      {(location.pathname.includes('/overview') || location.pathname.includes('/comment')) || <Footer />}
    </>
  );
}

export default App;
