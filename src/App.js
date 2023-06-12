import { BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs';
import './App.css';
import TextArea from './Component/TextArea';
import { useState } from 'react';
import { Routes, Route, useParams } from 'react-router-dom'
import Login from './Component/Login';
import Register from './Component/Register';
import ForgetPassword from './Component/ForgetPassword'
import ResetPasswordForm from './Component/ResetPassword';
import Footer from './Component/Footer';
import axios from 'axios';
import { API_URL } from './API/api';

function App() {
  // const [mode, setMode] = useState(false)
  // const darkThemeMode = () => {
  //   setMode(false)
  // }
  // const lightThemeMode = () => {
  //   setMode(true)
  // }

  const params = useParams()





  return (
    <div className="App" >
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Signup' element={<Register />} />
        <Route path='/textArea/' element={<TextArea />} />
        <Route path='/Forget-password' element={<ForgetPassword />} />
        <Route path='/Reset-password/:resetToken' element={<ResetPasswordForm />} />
      </Routes>
      {/* <Footer /> */}
      {/* <h1>Markdown</h1> */}
      {/* {mode ?
        (<button type="button" className="btn btn-dark" onClick={darkThemeMode}><BsFillMoonStarsFill /></button>) :
        (<button type="button" className="btn btn-dark" onClick={lightThemeMode}><BsFillSunFill /></button>)
      } */}



    </div>
  );
}

export default App;
