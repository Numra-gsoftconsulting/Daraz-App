import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import ProtectedRoute from './ProtectedRoutes';
import SharedLayout from './Pages/SharedLayout';


function App() {
  
  return (
   
 
  <BrowserRouter>
    
   <Routes>
    
   
    <Route path='/' element={<SharedLayout />} >

   
           <Route element={<ProtectedRoute/>}> 
          <Route path="Dashboard" element={<Dashboard/>} />
          </Route> 
          
          <Route index element={<Home/>} />
         
  
          <Route path='Login' element={<Login /> } />
    
   
    </Route>
   
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
