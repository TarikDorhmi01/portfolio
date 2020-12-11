import './App.css';
import { ReactComponent as ProfileIcon} from './icons/profile.svg'
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as EducationIcon } from './icons/education.svg';
import  Navbar from './Components/Navbar';
import  NavItem from './Components/NavItem';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import React from 'react';



function App() {
  return (
    <Router>
    <div className="App">
      <Navbar>
        <NavItem page="/Profile" icon={<ProfileIcon/>}>
          Profile
        </NavItem>
        
        <NavItem page="/Projects" icon={<CogIcon/>}>
          Projects
        </NavItem>
        
        <NavItem page="/Education" icon={<EducationIcon/>}>
          Education
        </NavItem>

        <NavItem page="/Skill-set" icon={<PlusIcon />}>
          Skill Set
        </NavItem>
        

      </Navbar>
      <Switch>
          <Route path="/Profile">
            <h1>hi i'm profile page</h1>
          </Route>
          <Route path="/Projects">
            <h1>hi i'm projects page</h1>
          </Route>
          <Route path="/Education">
            <h1>hi i'm education page</h1>
          </Route>
          <Route path="/Skill-set">
            <h1>hi i'm skill set page</h1>
          </Route>
        </Switch>
      
    </div>
    </Router>
      
  );
}



export default App;
