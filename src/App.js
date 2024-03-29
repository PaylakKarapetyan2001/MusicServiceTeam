import React from 'react';
import { BrowserRouter,Navigate,Route,Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import NotFound from './pages/not-found/NotFound';
import Admin from './pages/admin/Admin';
import Login from './pages/login/Login';
import SignUp from './pages/login/SignUp';
import ForgetPassword from './pages/login/ForgetPassword';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/'  element= {<Navigate to = '/home'/>}/>
          <Route path='/home'  element= {<Home />}/>
          <Route path='/adm' element ={<Admin />} />
          <Route path='/login' element={<Login />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/forget-password' element={<ForgetPassword />} />
          <Route path='*'  element= {<Navigate to = '/not-found'/>}/>
          <Route path='/not-found' element  ={<NotFound />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App;