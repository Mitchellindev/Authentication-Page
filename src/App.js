import { BrowserRouter, Routes, Route, } from "react-router-dom";

//pages
import Login from './pages/Login';
import Signup from './pages/Signup';
import Forgotpassword from './pages/Forgotpassword';
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='w-full h-screen bg-gray-200'>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='login' element={<Login />}/>
        <Route path='signup' element={<Signup />}/>
        <Route path='forgottenpassword' element={<Forgotpassword />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
