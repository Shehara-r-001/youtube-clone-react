import Login from './pages/Login';
import Feed from './components/Feed';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Tagsbar from './components/Tagsbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Layout = ({ children }) => (
  <div>
    <Header />
    <div>
      <Sidebar />
      <div className='md:ml-[70px]'>
        <Tagsbar />
        {children}
      </div>
    </div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
