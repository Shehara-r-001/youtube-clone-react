import Login from './pages/Login';
import Feed from './components/Feed';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import VideoPage from './pages/VideoPage';
import Header from './components/Header';

function App() {
  const Layout = ({ children }) => (
    <div>
      <Header />
      {children}
    </div>
  );

  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/login' element={<Login />} />
      <Route
        path='/video/:id'
        element={
          <Layout>
            <VideoPage />
          </Layout>
        }
      />
      {/* <Route path='/search' element={<h1>Search Results</h1>} /> */}
      <Route path='*' element={<Feed />} />
    </Routes>
  );
}

export default App;
