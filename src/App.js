import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/dashboard/:email' element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
