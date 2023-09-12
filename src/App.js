import logo from './logo.svg';
import './App.css';
import Poloroid from './components/poloroid';
import SocialLinks from './components/social_links';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='container my-5'>
        <div className='row justify-content-evenly align-items-center'>
          <Poloroid name="Ruben" description="Ruben Boone - 2023"
            picture="/img/ruben.jpg" degree="-7"/>
          <SocialLinks/>
        </div>
      </div>
    </Router>
  );
}

export default App;
