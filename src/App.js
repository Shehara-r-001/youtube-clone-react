import Feed from './components/Feed';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Tagsbar from './components/Tagsbar';

function App() {
  return (
    <div>
      <Header />
      <div>
        <Sidebar />
        <div className='md:ml-[70px]'>
          <Tagsbar />
          <Feed />
        </div>
      </div>
    </div>
  );
}

export default App;
