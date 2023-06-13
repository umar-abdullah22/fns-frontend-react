import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Hiring from './Hiring';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import './index.css';
import RouteComponent from './router';
function App() {
  return (
    <>
      {/* <div className="App"> */}
      {/* <Home /> */}
      <ToastContainer />

      <Router>
        <RouteComponent />
      </Router>
      {/* <Hiring/> */}
      {/* </div> */}
    </>
  );
}

export default App;
