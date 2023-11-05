import logo from './logo.svg';
import './App.css';
import { HashRouter as Router,Routes,Route } from 'react-router-dom';
import BMKG from './pages/Short';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<BMKG/>}/>
      </Routes>
    </Router>
  );
}

export default App;
