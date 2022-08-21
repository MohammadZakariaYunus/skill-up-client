import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Header/Header';
import Services from './Pages/Services/Services';
import Login from './Pages/Login/Login';
import Footer from './Pages/Footer/Footer';
import SignUp from './Pages/Login/SignUp';
import Home from './Pages/Home/Home';
import RequireAuth from './Pages/Login/RequireAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/services' element={
          <RequireAuth>
            <Services></Services>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      <Footer></Footer>
    </div >
  );
}

export default App;
