import Login from './pages/Login';
import Feed from './components/Feed';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Tagsbar from './components/Tagsbar';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const Layout = ({ children }) => (
  <div className=''>
    <Header />
    <div className=''>
      <Sidebar />
      <div className='md:ml-[70px]'>
        <Tagsbar />
        {children}
      </div>
    </div>
  </div>
);

function App() {
  const { accessToken, loading } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !accessToken) {
      navigate('/login', { replace: 'true' });
    }
  }, [accessToken, loading]);
  return (
    <Routes>
      <Route
        path='/'
        element={
          <Layout>
            <Feed />
          </Layout>
        }
      />
      <Route path='/login' element={<Login />} />
      <Route
        path='/search'
        element={
          <Layout>
            <h1>Search Results</h1>
          </Layout>
        }
      />
      <Route
        path='*'
        element={
          <Layout>
            <Feed />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
