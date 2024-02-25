
import {Route,Routes,BrowserRouter } from 'react-router-dom';
import './App.css';
import Loginform from './components/login';
import SignupForm from './components/signup';

function App() {
  return (
    
    <BrowserRouter>
      <div className="App">
      
        <Routes>
          <Route path='/' element={<Loginform/>} />
          <Route path="/signup" element={<SignupForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
