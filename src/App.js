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

import { UserContext } from './Components/Context/UserContext';


function App() {
  return (

  <UserContext.Provider value = {{}}> 
   <Router>
    <NavigationBar />
    <Routes>
      <Route to = '/home' element = {<Home />} />
      <Route to = '/users' element = {<Users /> } />
      <Route to = '/users/:id' element = {<User />} /> 
      <Route to ='/getstarted' element = {<Register />} />
      <Route to ='/login' element = {<Login />} />
    </Routes>
    <Footer />
   </Router>
   </UserContext.Provider>

  );
}

export default App;
