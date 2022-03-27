
import './App.css';
import Header from './components/Header/Header';
import Recommended from './components/RecommendedVideos/Recommended';
import Sidebar from './components/Sidebar/Sidebar';






function App() {
  return (
    <div className="app">


      {/* Header */}
      <Header />
      {/* Sidebar */}
      <div className='app__page'>
        <Sidebar />
        <Recommended />
      </div>



      {/* mainSection */}




    </div>
  );
}

export default App;
