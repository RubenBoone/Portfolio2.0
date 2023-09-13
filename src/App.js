import logo from './logo.svg';
import './App.css';
import Poloroid from './components/poloroid';
import SocialLinks from './components/social_links';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ProjectList from './components/project_list';
import PostIt from './components/postit';

const today = new Date();
let age = today.getFullYear() - 2001;

if (today.getDate() < 23 && today.getMonth() <= 2) {
  age -= 1;
}

const aboutMe = [
  age + " Jaar",
  "Oude muziek fan",
  "Leergierig",
  "Crime fiction",
  "Films"
];

const degrees = [
    "Elektrotechnieken, Sint Paulus, Mol, 2012-2019",
    "Toegepaste informatica, Thomas More, Geel, 2019-2022",
    "Master/schakeljaar informatica, UHasselt, Hasselt, 2022-Nu"
];

export const TapeType = {
  Y: 'y',
  LR: 'lr',
  RL: 'rl',
  Single: 'S'
}

function App() {
  return (
    <div className='container p-0 my-5'>
      <h1 className='d-none'>Portfolio: Ruben Boone</h1>
        <h2 className='d-none'>Over Mij</h2>
        <div className='row align-items-center m-3'>
          <div className='col-md-6 col-sm-12'>
          <Poloroid picture={"/img/ruben.jpg"} alt={"Picture of Ruben Boone"} 
            description={"Ruben Boone - 2023"} TapeType={TapeType.LR} tapeColor1="blue-tape" tapeColor2="red-tape"/>
          </div>
          <div className='col-md-6 col-sm-12'>
            <SocialLinks/>
          </div>
        </div>
        <div className='m-5 row justify-content-around'>
          <div className='col-sm-12 col-md-4 my-3'>
            <PostIt title="Info" listItems={aboutMe}/>
          </div>
          <div className='col-sm-12 col-md-4 my-3'>
            <PostIt title="Opleidingen" listItems={degrees} color="#ffe869"/>
          </div>
        </div>
        <h2 className='handWritten tape blue-tape p-2 m-5'>Projecten</h2>
        <ProjectList/>
    </div>
  );
}

export default App;
