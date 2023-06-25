import './App.css';
import TextArea from './Component/TextArea';
import { Routes, Route } from 'react-router-dom'
import Login from './Component/Login';
import Register from './Component/Register';
import ForgetPassword from './Component/ForgetPassword'
import ResetPasswordForm from './Component/ResetPassword';


function App() {







  return (
    <div className="App" >
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Signup' element={<Register />} />
        <Route path='/textArea/' element={<TextArea />} />
        <Route path='/Forget-password' element={<ForgetPassword />} />
        <Route path='/Reset-password/:resetToken' element={<ResetPasswordForm />} />
      </Routes>
    </div>
  );
}

export default App;
