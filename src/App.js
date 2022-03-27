
import './App.css';


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

        <Routes>

          <Route path='/' element={<AppPage />} />


        </Routes>


      </BrowserRouter>










    </div>
  );
}

export default App;
