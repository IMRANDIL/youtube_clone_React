
import './App.css';
import Header from './components/Header/Header'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AppPage from './components/AppPage/AppPage';






function App() {
  return (
    <div className="app">

      <BrowserRouter>
        <Header />
        <Routes>

          <Route path='/search/:searchTerm' />
          <Route path='/' element={<AppPage />} />


        </Routes>


      </BrowserRouter>










    </div>
  );
}

export default App;
