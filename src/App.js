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
import UserbyCategory from './Components/Users/UserbyCategory';


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
      <Route path = '/users/:category' element = {<UserbyCategory /> } />
      <Route path = '/users/:id' element = {<User />} /> 
      <Route path ='/login' element = {<Login />} />
      <Route path ='/register' element = {<Register />} />
    </Routes>
    {/* <Footer /> */}
   </Router>
   </UserContext.Provider>

  );
}

export default App;
