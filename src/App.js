import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import BMKG from './pages/Short';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<BMKG/>}/>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
