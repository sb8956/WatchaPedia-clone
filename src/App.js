import Footer from './components/Footer';
import Movies from './pages/Movies';
import Tv from './pages/Tv';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import DetailContent from './pages/DetailContent';
import Overview from './pages/Overview';
import Comment from './pages/Comment'
import Search from './pages/Search';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/tv" element={<Tv />} />
        <Route path="/contents/:contentId" element={<DetailContent />} />
        <Route path="/contents/:contentId/overview" element={<Overview />} />
        <Route path="/contents/:contentId/comment" element={<Comment />} />
        {/* <Route path="/" element={<Search />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
