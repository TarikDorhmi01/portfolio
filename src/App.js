import './App.css';
import { ReactComponent as ProfileIcon} from './icons/profile.svg'
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as EducationIcon } from './icons/education.svg';
import  Navbar from './Components/Navbar';
import  NavItem from './Components/NavItem';

import React from 'react';



function App() {
  return (
    <div className="App">
      <Navbar>
        <NavItem icon={<ProfileIcon/>} />
        <NavItem icon={<CogIcon/>} />
        <NavItem icon={<EducationIcon/>} />
        <NavItem icon={<PlusIcon />}>
          
        </NavItem>
      </Navbar>
    </div>
      
  );
}



export default App;
