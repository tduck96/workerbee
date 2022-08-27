import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components

import NavigationBar from './Components/Navigation/NavigationBar';
import Footer from './Components/Footer/Footer'; 
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import Users from './Components/Users/Users';
import User from './Components/Users/User';
import Home from './Components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

// Context

import { UserContext } from './Context/UserContext';


function App() {
  return (

  <UserContext.Provider value = {{}}> 
   <Router>
    <NavigationBar />
    <Routes>
      <Route path = "/" element = {<Home />} />
      <Route path = '/users' element = {<Users /> } />
      <Route path = '/users/:id' element = {<User />} /> 
      <Route path ='/getstarted' element = {<Register />} />
      <Route path ='/login' element = {<Login />} />
    </Routes>
    {/* <Footer /> */}
   </Router>
   </UserContext.Provider>

  );
}

export default App;
