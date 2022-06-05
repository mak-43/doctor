import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Pages/Shared/Navbar';
import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';
import Login from './Components/Pages/Shared/Login';
import Appointment from './Components/Pages/Appointment/Appointment';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className='max-w-7xl mx-auto' >
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}> </Route>
        <Route path='/about' element={<About/>}> </Route>
        <Route path='appointment' element={<Appointment/>}> </Route>

        <Route path='/login' element={<Login/>}> </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
