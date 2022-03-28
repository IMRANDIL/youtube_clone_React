
import './App.css';
import Header from './components/Header/Header'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AppPage from './components/AppPage/AppPage';
import SearchPage from './components/SearchPage/SearchPage';






function App() {
  return (
    <div className="app">

      <BrowserRouter>
        <Header />
        <Routes>

          <Route path='/search/:searchTerm' element={<SearchPage />} />
          <Route path='/' element={<AppPage />} />


        </Routes>


      </BrowserRouter>










    </div>
  );
}

export default App;
