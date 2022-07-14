import Login from './Container/Login/login';
import { Route, Routes } from 'react-router-dom';
import Signup from './Container/Signup/signup';
import Dashboard from './Container/Dashboard/dashboard';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
     
    </>
  );
}

export default App;