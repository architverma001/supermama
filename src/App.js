import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route,Link,useNavigate} from 'react-router-dom'
import Registration from './Registration';
import Mama from './Mama'
import Doctor from './Doctor'
import Community from './Community'
import Service from './Service'
import Login from './Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './Products';
import Docprofile from './Profiles/Docprofile'
import WhatToDo from './pragnancy/WhatToDo';
import Tips from './pragnancy/Tips';
function App() {
  return (
    <div className='main'>
    <BrowserRouter>
    <Routes>
      <Route path='/' element ={<Registration/>} />
      <Route path='/mama' element ={<Mama/>} />
      <Route path='/service' element={<Service/>}/>
      <Route path='/product' element={<Products/>}/>
      <Route path='/doctor' element={<Doctor/>}/>
      <Route path='/docprof' element = {<Docprofile/>}   />
      <Route path='/community' element={<Community/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/wtd' element={<WhatToDo/>} />
      <Route path='/tips' element={<Tips/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
